import React from 'react'
import Search from './Section/Search';
import './LandingPage.css';
import { NCP_ID } from '../../../Config';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';


function LandingPage() {
    
    return (
        <div className="main">
            <div className="search">
                <Search></Search>
            </div>
            <div className="map">
            <RenderAfterNavermapsLoaded ncpClientId={ NCP_ID } >
                    <NaverMap 
                        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                        style={{
                        width: '100%',
                        height: '100%',
                        }}
                        defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
                        defaultZoom={15}>
                    
                    <Marker
                        key={1}
                        position={{ lat: 37.30892948453561, lng:127.0518267640682  }}
                        animation={2}
                        onClick={() => {alert('여기는 N서울타워입니다.');}}
                        />
                    </NaverMap>
            </RenderAfterNavermapsLoaded>
            </div>
            
        </div>
    )
}

export default LandingPage
