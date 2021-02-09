import React from 'react'
import { Marker } from 'react-naver-maps';
function MapMaker(props) {
    const mapx = props.mapx; 
    const mapy = props.mapy;
    return (
        <Marker
            key={1}
            position={{ lat: mapy, lng: mapx  }}
            animation={2}
            onClick={() => {alert('여기는 N서울타워입니다.');}}
        />
    )
}

export default MapMaker
