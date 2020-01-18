import React from 'react';
import {NavLink} from "react-router-dom";

let toolbar = (props) => {

    return (
        <nav>
            <img src={props.image} className="logo" />
            <ul>
                <li><NavLink to="tutorial">Tutorial</NavLink></li>
            </ul>
        </nav>
    )
    
}

export default toolbar;