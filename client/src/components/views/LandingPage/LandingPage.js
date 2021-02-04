import React from 'react'
import Search from './Section/Search';
import './LandingPage.css';
import { NCP_ID } from '../../../Config';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';


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
                        defaultZoom={15}
                    />
            </RenderAfterNavermapsLoaded>
            </div>
            
        </div>
    )
}

export default LandingPage
