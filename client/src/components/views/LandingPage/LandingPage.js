import React from 'react'
import { NCP_ID } from '../../../Config';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';
// import Map from './Section/Map';

function LandingPage() {
    return (
        <div>
          <RenderAfterNavermapsLoaded ncpClientId={ NCP_ID }>
            <NaverMap 
                mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                style={{
                width: '85%',
                height: '860px',
                }}
                defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
                defaultZoom={15}
            />
        </RenderAfterNavermapsLoaded>
        </div>
    )
}

export default LandingPage
