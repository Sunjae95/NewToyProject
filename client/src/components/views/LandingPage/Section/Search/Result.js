import React from 'react'
import './Result.css';

function Result(props) {
    return (
        <div className="SearchResult">
            {props.title}<br/>
            {props.address}
        </div>
    )
}

export default Result
