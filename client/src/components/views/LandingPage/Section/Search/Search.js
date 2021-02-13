import React, { useState } from 'react';
import Axios from 'axios';
import Result from './Result.js';
import './Search.css';

function Search(props) {
    
    const [Search, setSearch] = useState("");
    
    const chageValue = (title) => {
        let afterTitle = title.split('<b>');
        let tmp = afterTitle.join('');
        afterTitle = tmp.split('</b>');
        // props.setSearchResult(afterTitle);
        return afterTitle;
    }

    const onChangeSearch = (event) => {
        setSearch(event.target.value);
    }

    const onSearchSubmit = (event) => {
        event.preventDefault();
        //server -> search API -> server -> here
        const searchData = encodeURI(Search);   //한글로 보낼시 인코딩 필수!
        Axios.post('http://localhost:5000/api/search', {
                data: {
                    searchData
                }
            })
            .then(result => {
                console.log(result.data.items);
                return result.data.items;
            })
            .then(result => {
                return props.setSearchResult(result);
                }
            );
    }

    return (
        <div className="search">
            <form onSubmit={ onSearchSubmit }>
                <div className="searchBar">
                    <div>
                        <input type="button" value="🔍" onClick={ onSearchSubmit }></input>
                        <input type="text" placeholder="@@@동 맛집 입력하세요" onChange={ onChangeSearch }></input>   
                    </div>
                </div>
            </form>
            { props.SearchResult && props.SearchResult.map((searchResult, index) => (
                <React.Fragment key={index.toString()}>
                    <div className="searchResult">
                        <Result 
                            title = { chageValue(searchResult.title) }
                            link = { searchResult.link }
                            address = {searchResult.address}
                        />
                    </div>  
                </React.Fragment>
            ))}
        </div>
    );
}

export default Search
