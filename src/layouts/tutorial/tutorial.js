import React, {Component} from 'react';

import Toolbar from '../../components/toolbar/toolbar';
import Logo from '../../assets/logo.png';
import Tarjeta from "../../components/tarjeta/tarjeta";

import Alexa from "../../assets/alexa.jpg";
import PasoDos from "../../assets/segunda.png";
import PasoTres from "../../assets/tercera.png";
import PasoCuatro from "../../assets/cuarta.png";
import PasoCinco from "../../assets/quinto.png";

class Tutorial extends Component {

    state = {
        pasos: [
            {
                nombre:"Primer paso",
                body:"Entra a tu dispositivo Alexa o a la aplicación móvil",
                imagen:Alexa
            },
        ]
    }

    render() {

        let tarjetas = this.state.pasos.map(
            (paso, index) => <Tarjeta key={index} type={index} title={paso.nombre} body={paso.body} img={paso.imagen} />
        )

        return (
            <div className="tutorial">
                <header>
                    <Toolbar image={Logo} />
                </header>
                <article className="container">
                    <header>
                        <h2>Tutorial para hacer el login en la skill de soporte técnico Compucloud</h2>
                    </header>
                    <div className="deck">
                        {tarjetas}
                    </div>
                </article>
            </div>
        );
    }
}


export default Tutorial;