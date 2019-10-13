import React from 'react';
import {Form} from 'react-bootstrap';
import Elemento from './elemento';

let letraInicial = (nombre) => {
    let primeraLetra = nombre[0];
    primeraLetra = primeraLetra.toUpperCase();
    return primeraLetra.concat(nombre.slice(1));
}

let formulario = (props) => {

    let elementos = Object.keys(props.usuario);

    let controles = [];

    for(let elemento of elementos) {
        controles.push(

            <Elemento 
                name={elemento}
                control={letraInicial(props.usuario[elemento]['nombre'])}
                tipo={props.usuario[elemento]['tipo']} 
                valor={props.usuario[elemento]['valor']}
                cambiarValor = {props.cambiarValor}
                key={elemento}
            /> 
        
        );
    };

    return (
        <Form>
            {controles}
        </Form>
    )
}

export default formulario;