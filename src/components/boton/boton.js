import React from 'react';

import {Button} from 'react-bootstrap';

let boton = (props) => {

    return (
        <Button style={{background:'#4babe3'}} onClick={props.click} variant={props.variante}>
            {props.texto}
        </Button>
    );
}


export default boton;