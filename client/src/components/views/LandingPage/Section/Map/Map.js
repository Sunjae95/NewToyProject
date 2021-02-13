import React from 'react'
import { NCP_ID } from '../../../../../Config';
import { RenderAfterNavermapsLoaded, NaverMap} from 'react-naver-maps';
import MapMaker from './MapMaker';
function Map(props) {

    return (
             <RenderAfterNavermapsLoaded ncpClientId={ NCP_ID } >
                    <NaverMap 
                        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                        style={{
                            width: '70%',
                        
                        }}
                        defaultCenter={{ 
                            lat: 37.3595704, 
                            lng: 127.105399 }}
                        defaultZoom={15}>
                     { props.SearchResult && props.SearchResult.map((searchResult, index) => (
                        <React.Fragment key={index}>
                            <MapMaker
                                title = { searchResult.title } 
                                mapx = {searchResult.mapx}
                                mapy = {searchResult.mapy}
                            />
                        </React.Fragment>
                ))}
                    </NaverMap>
            </RenderAfterNavermapsLoaded>
    )
}

export default Map
