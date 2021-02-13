import React, { useState } from 'react';
import './LandingPage.css';
import Search from './Section/Search/Search';
import Map from './Section/Map/Map';


function LandingPage() {
    const [SearchResult, setSearchResult] = useState([]);

    return (
        <div id="main">
                <Search
                    SearchResult = { SearchResult }
                    setSearchResult = { setSearchResult }
                />
                <Map
                    SearchResult = { SearchResult }
                />
        </div>
    )
}

export default LandingPage
