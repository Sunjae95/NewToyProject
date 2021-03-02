import React, { useState } from 'react';
import './LandingPage.css';
import Search from './Section/Search/Search';
import Map from './Section/Map/Map';


function LandingPage() {
    const [SearchResult, setSearchResult] = useState([]);
    const [Mapxy, setMapxy] = useState([37.3595704, 127.105399]);

    return (
        <div id="main">
                <Search
                    SearchResult = { SearchResult }
                    setSearchResult = { setSearchResult }
                    setMapxy = { setMapxy }
                />
                <Map
                    SearchResult = { SearchResult }
                    Mapxy = { Mapxy }
                />
        </div>
    )
}

export default LandingPage
