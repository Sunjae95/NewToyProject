import React, { useEffect } from 'react';
import Axios from 'axios';
// import { API_URL } from '../../../../Config';
//지도 가져오기
function Map() {

    useEffect(() => {
        //API를 통해 지도를 가져오기
        Axios.get('http://localhost:5000/api/map')
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log('API가져오기 실패 오류내용: ', err));
    }, [])

    return(
        <div>
        
        </div>
    );
}

export default Map