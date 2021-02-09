import React, { useState } from 'react';
import Axios from 'axios';
import Result from './Result.js';

function Search(props) {
    
    const [Search, setSearch] = useState("");
    

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
        <div >
            <form onSubmit={ onSearchSubmit }>
                <label>검색</label><input type="text" placeholder="@@@동 맛집 입력하세요" onChange={ onChangeSearch }></input>
            </form>
            <div>
                { props.SearchResult && props.SearchResult.map((searchResult, index) => (
                    <React.Fragment key={index.toString()}>
                        <Result 
                            title = {searchResult.title}
                            address = {searchResult.address}
                        />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default Search
