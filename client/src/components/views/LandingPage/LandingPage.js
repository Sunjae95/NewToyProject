import React, { useState } from 'react';
import './LandingPage.css';
import Search from './Section/Search/Search';
import Map from './Section/Map/Map';


function LandingPage() {
    const [SearchResult, setSearchResult] = useState([]);

    return (
        <div className="main">
            <div className="search">
                <Search
                    SearchResult = { SearchResult }
                    setSearchResult = { setSearchResult }
                />
            </div>
            <div className="map">
                <Map
                    SearchResult = { SearchResult }
                />
            </div>
            
        </div>
    )
}

export default LandingPage
