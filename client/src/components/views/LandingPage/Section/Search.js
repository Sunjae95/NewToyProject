import React, { useState } from 'react';
import Axios from 'axios';
import Result from './Result';

function Search() {
    
    const [Search, setSearch] = useState("");
    const [SearchResult, setSearchResult] = useState([]);
    // const [Searchxy, setSearchxy] = useState();
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
                setSearchResult(result);
           
                }
            )
    }

    return (
        <div >
            <form onSubmit={ onSearchSubmit }>
                <label>검색</label>
                <input type="text" placeholder="검색어를 입력하세요" onChange={ onChangeSearch }></input>
            </form>
            <div>
                { SearchResult && SearchResult.map((searchResult, index) => (
                    <React.Fragment key={index.toString()}>
                        <Result 
                            title = {searchResult.title}
                            address = {searchResult.address}
                        />
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Search
