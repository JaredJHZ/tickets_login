// main react library
import React, {Component} from 'react';
// own components
import Formulario from '../../components/formulario/formulario';
import Boton from '../../components/boton/boton';
import Toolbar from '../../components/toolbar/toolbar';
import Logo from '../../assets/logo.png';
import Loading from '../../components/loading/loading';

// configs files
import config from '../../config';

// react router and queryString library for parameters
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

// axios api AJAX calls
import API from '../../axios';

import axios from 'axios';

//  functions 
const {generateRandomNumber} = require('../../functions/functions');



// I created a Home class that extends the Component class from the React main library, this is a Class based component
// so I can manage a State
class Home extends Component {

    state = {
        'inicio':true,
        'usuario' : {
            'nombreDeUsuario': {
                'tipo': 'text',
                'nombre':'nombre de usuario',
                'valor':''
            }
        },

        'code': '',
        'registrado':false,
        'id':'',
        'loading':false


    }

    constructor(props) {
        super(props);
        document.title = "Login Tickets Compucloud";
    }

    componentWillMount(){
        let params = queryString.parse(this.props.location.hash);
        console.log(params);
        let token = params['access_token'];
        if(token) {
            this.setState({
                ...this.state,
                token:token,
                inicio:false
            } , () => {
                localStorage.setItem('token', this.state.token);
            });
        }
    }

    componentDidMount() {


    }

    loginHandle = () => {


        let secret = config.secret;
        let client = 'tickets_compucloud';
        let endpoint = `https://soportecompucloud.zendesk.com/oauth/authorizations/new?response_type=token&redirect_uri=${'http://localhost:3000'}&client_id=${client}&scope=read%20write`;

        window.location = endpoint;



    }

    cambiarValorHandle = (event) => {
        
        let name = event.target.name;
        let value = event.target.value;
        
        this.setState({
            ...this.state,
            'usuario': {
                ...this.state['usuario'],
                [name] : {
                    'tipo': this.state.usuario[name].tipo,
                    'nombre': this.state.usuario[name].nombre,
                    'valor':value
                }
            }
        });
    }

    registrarUsuarioHandler =  (event) => {

        this.setState({...this.state, loading:true},  () => {

            let number = generateRandomNumber();

            API.post('https://b0k8e26j66.execute-api.us-west-2.amazonaws.com/BetaVersion',
            { 
            'user':this.state.usuario.nombreDeUsuario.valor , 
            'token':this.state.token, 
            'id':number 
            }).then(
                finalData => {
                     this.setState({...this.state, registrado: true, id: finalData.data, loading:false});
            });
          
        })

    }



    render() {

        let app;

        if (!this.state.loading) {
            if (!this.state.inicio && !this.state.registrado){
                app = (
                    <div>
                        <Toolbar image={Logo} />
                        <div className="color-azul">
                            <div className="contenedor titulo">
                                <h1>Tickets Compucloud</h1>
                            </div>
                            <div className="contenedor info">
                                <h3>Elija el nombre de usuario que tendrá en la skill de tickets compucloud</h3>
                            </div>
                            <div className={"contenedor"}>
                                <Formulario 
                                cambiarValor = {this.cambiarValorHandle}
                                usuario = {this.state.usuario} 
                                />                        
                            </div>
    
                            <div className="contenedor">
                                <Boton variante="success" 
                                    texto="Registrar usuario en Skill"
                                    click = {this.registrarUsuarioHandler}
                                />
                            </div>
                        </div>
                    </div>
        
                );    
            } else {
                if (!this.state.registrado) {
                    app = (
                        <div>
                        <Toolbar image={Logo} />
                        <div className="color-azul">
                            <div className="contenedor titulo">
                                <h1>Tickets Compucloud</h1>
                            </div>
                            <div className={"contenedor info"}>
                               <h3>Es necesario que inicie sesión en Zendesk</h3>
                            </div>
                            <div className="contenedor">
                                    <Boton variante="success" 
                                            texto="Iniciar sesion en zendesk"
                                            click = {this.loginHandle}
                                    />
                            </div>
                        </div>
                    </div>
                    )
                } else {
                    app = (
                        <div>
                        <Toolbar image={Logo} />
                        <div className="color-azul">
                            <div className="contenedor titulo">
                                <h1>Tickets Compucloud</h1>
                            </div>
                            <div className={"contenedor info"}>
                               <h3>Su clave de acceso a la skill es</h3>
                            </div>
                            <div className={"contenedor info"}>
                                <h1>{this.state.id}</h1>
                            </div>
                            <div className={"contenedor info"}>
                                <h5>Debe de dictar este código a la skill!</h5>
                            </div>
                        </div>
                    </div>
                    )
                }
            }
    
        } else {
            app = (
                <div>
                    <Toolbar image={Logo} />
                    <div className="color-azul">
                        <div className="contenedor titulo">
                            <h1>Tickets Compucloud</h1>
                        </div>
                        <div className={"contenedor info"}>
                            <Loading />
                        </div>
                    </div>
                </div>
            )
        }
    

        return app;
    }
}


export default withRouter(Home);