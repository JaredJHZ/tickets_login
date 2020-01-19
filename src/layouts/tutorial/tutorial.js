import React, {Component} from 'react';

import Toolbar from '../../components/toolbar/toolbar';
import Logo from '../../assets/logo.png';
import Tarjeta from "../../components/tarjeta/tarjeta";

class Tutorial extends Component {

    state = {
        pasos: [
            {
                nombre:"Primer paso",
                body:"Entra a tu dispositivo Alexa o a la aplicación móvil"
            },
            {
                nombre:"Segundo paso",
                body:"Da click en el botón de Iniciar sesión"
            },
            {
                nombre:"Tercer paso",
                body:"Inicia sesión con tus credenciales de Zendesk"
            },
             {
                nombre:"Cuarto paso",
                body:"Escribe un nombre de usuario sin espacios"
            },
            {
                nombre:"Quinto paso",
                body:"Guarda el código que te da la página"
            },
            {
                nombre:"Sexto paso",
                body:"Inicia la skill y di el comando alexa registrar usuario, posteriormente dicta tu nombre de usuarió y el código que te dió la página web."
            }
        ]
    }

    render() {

        let tarjetas = this.state.pasos.map(
            (paso, index) => <Tarjeta name={"t"+index} index={index} key={index} type={index} title={paso.nombre} body={paso.body} img={paso.imagen} />
        )

        return (
            <div className="tutorial">
                <header>
                    <Toolbar image={Logo} />
                </header>
                <article>
                    <div className="deck">
                        {tarjetas}
                    </div>
                </article>
            </div>
        );
    }
}


export default Tutorial;