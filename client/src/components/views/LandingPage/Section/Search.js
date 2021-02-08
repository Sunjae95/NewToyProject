import React, { useState } from 'react';
import Axios from 'axios';

function Search() {
    
    const [Search, setSearch] = useState("");

    const onChangeSearch = (event) => {
        setSearch(event.current.value);
    }

    const onSearchSubmit = (event) => {
        event.preventDefault();
        console.log('onSearchStart');
        Axios.get('http://localhost:5000/api/search')
            .then(result => console.log(result.data.items));

        console.log('onSearchEnd');
    }

    return (
        <div >
            <form onSubmit={ onSearchSubmit }>
                <label>검색</label>
                <input type="text" placeholder="검색어를 입력하세요" onChange={ onChangeSearch }></input>
            </form>
            {/* 결과 창 */}
            <div>
                결과
            </div>
        </div>
    )
}

export default Search
