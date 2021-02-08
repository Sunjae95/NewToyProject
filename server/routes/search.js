const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', (req, res) => {
    console.log('getStart');
    fetch('https://openapi.naver.com/v1/search/local.json?query=%EC%A3%BC%EC%8B%9D&display=10&start=1&sort=random',{
        headers: {
            "X-Naver-Client-Id": "zx74mjFuSJ4fcqPaZKwn",
            "X-Naver-Client-Secret": "Z7Ur57Xw4G"
        }
    })
    .then(result => {
        // response 처리
        // 응답을 JSON 형태로 파싱
        return result.json();
      })
      .then(result => res.send(result))
      .catch(err => {
        // error 처리
        console.log('Fetch Error', err);
      });
  
    console.log('getEnd');
    
    // fetch('https://api.themoviedb.org/3/movie/popular?api_key=6901bbe355df1825e1d70fa1d8209c67&language=en-US&page=1')
    // .then(res => res.json())
    // .then(res => console.log(res));
    
});


module.exports = router;
