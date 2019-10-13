import React from 'react';

let toolbar = (props) => {

    return (
        <nav>
            <img src={props.image} className="logo" />
        </nav>
    )
    
}

export default toolbar;