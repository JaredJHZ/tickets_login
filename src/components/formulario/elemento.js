import React from 'react';
import {Form} from 'react-bootstrap';

let elemento = (props)   => {
    return (

                <Form.Group>
                    <div className="contenedor">
                        <Form.Label>{props.control}</Form.Label>
                    </div>
                    <Form.Control 
                    type={props.tipo} 
                    placeholder={props.control}
                    onChange={(event) => props.cambiarValor(event)}
                    value={props.valor}
                    name={props.name}
                    />
                </Form.Group>
    )
}


export default elemento;