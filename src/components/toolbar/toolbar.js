import React from 'react';
import {NavLink} from "react-router-dom";
import Contact from '../contacto/contacto';
let toolbar = (props) => {

    return (
        <div>
            <Contact />
            <nav name="toolbar">
                <img src={props.image} className="logo" />
                <ul>
                    <li><NavLink className="gray link" to="/">Login</NavLink></li>
                    <li><NavLink className="gray link" to="tutorial">Tutorial</NavLink></li>
                </ul>
            </nav>
        </div>

    )
    
}

export default toolbar;