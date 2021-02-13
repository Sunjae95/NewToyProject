import React from 'react'
import './Result.css';

function Result(props) {

    return (
        <div >
            <p className="resultFont">
            <a href={ props.link } target="_blank">{props.title}</a><br/><br/>
            {props.address}
            </p>
        </div>
    )
}

export default Result
