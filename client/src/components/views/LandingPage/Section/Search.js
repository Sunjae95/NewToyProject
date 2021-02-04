import React, { useState } from 'react'
function Search() {
    
    const [Search, setSearch] = useState("");

    const onChangeSearch = (event) => {
        setSearch(event.current.value);
    }

    const onSearchSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div >
            <form onSubmit={ onSearchSubmit }>
                <label>검색</label>
                <input type="text" placeholder="검색어를 입력하세요" onChange={ onChangeSearch }></input>
            </form>
        </div>
    )
}

export default Search
