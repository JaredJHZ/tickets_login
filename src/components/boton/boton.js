import React from 'react';

import {Button} from 'react-bootstrap';

let boton = (props) => {

    return (
        <Button onClick={props.click} variant={props.variante}>
            {props.texto}
        </Button>
    );
}


export default boton;