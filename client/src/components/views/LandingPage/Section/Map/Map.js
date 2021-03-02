import React from 'react'
import { NCP_ID } from '../../../../../Config';
import { RenderAfterNavermapsLoaded, NaverMap} from 'react-naver-maps';
import MapMaker from './MapMaker';
function Map(props) {

    
    return (
             <RenderAfterNavermapsLoaded  ncpClientId={ NCP_ID }>
                    <NaverMap 
                       
                        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                        style={{
                            width: '70%',  
                        }}
                        defaultCenter={{ 
                            lat: props.Mapxy[0], 
                            lng: props.Mapxy[1] }}
                        defaultZoom={17}>
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
//126.92067465792047
export default Map
