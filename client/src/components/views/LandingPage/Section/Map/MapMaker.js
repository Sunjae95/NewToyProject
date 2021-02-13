import React from 'react'
import { Marker } from 'react-naver-maps';
function MapMaker(props) {
    const mapx = props.mapx; 
    const mapy = props.mapy;
    const title = props.title;
    return (
        <Marker
            key={1}
            position={{ lat: mapy, lng: mapx  }}
            animation={2}
            onClick={() => {alert(`여기는 ${title}입니다.`);}}
        />
    )
}

export default MapMaker
