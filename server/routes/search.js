const express = require('express');
const router = express.Router();
const { ClientId, ClientSecret } = require('../config');
const fetch = require('node-fetch');
const proj4 = require('proj4');

proj4.defs('TM128','+proj=tmerc +lat_0=38 +lon_0=128 +k=0.9999 +x_0=400000 +y_0=600000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43');
proj4.defs('EPSG:5179','+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=400000 +y_0=600000 +ellps=GRS80 +units=m +no_defs');
proj4.defs('WGS84', "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees");


/* GET home page. */
router.post('/', (req, res) => {

    const query = req.body.data.searchData;     //인코딩된 검색어

    fetch(`https://openapi.naver.com/v1/search/local.json?query=${query}&display=5&start=1&sort=random`,{       //최대 5개 까지만 됨 네이버에서 막아놓음
        headers: {
            "X-Naver-Client-Id": ClientId,
            "X-Naver-Client-Secret": ClientSecret
        }
    })
    .then(result => {
        // response 처리
        // 응답을 JSON 형태로 파싱
        return result.json();
      })
      .then(result => {

        result.items.map((items, index) => {    //좌표 변환
          let [ x, y ] = proj4('TM128','EPSG:5179',[ Number(items.mapx), Number(items.mapy) ]); //TM128 -> EPSG:5179 
          [ x, y ] = proj4('EPSG:5179', 'WGS84', [ x , y ]);   //EPSG:5179 -> WGS84
          
          items.mapx = x;
          items.mapy = y;
        });  
        return res.send(result);
    })
      .catch(err => {
        // error 처리
        console.log('Fetch Error', err);
      });  
});


module.exports = router;
