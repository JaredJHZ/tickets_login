import React from "react";
import ReactImageMagnify from 'react-image-magnify';
import ScrollAnimation from 'react-animate-on-scroll';
import Alexa from "../../assets/echoLarge.png";
import Segundo from '../../assets/segunda.png';
import Tercera from '../../assets/tercera.png';
import Cuarta from '../../assets/cuarta.png';
import Quinta from '../../assets/quinto.png';
import Sexto from '../../assets/sexto.png';

import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
export default (props) => {

    

    const images = [Alexa,Segundo,Tercera,Cuarta, Quinta, Sexto]


    const imageProps = {
        smallImage: {
          alt: 'Phasellus laoreet',
          width:500,
          height:250,
          src: images[props.index]
        },
        largeImage: {
          src: images[props.index],
          width: 1200,
          height: 600
        },
        enlargedImageContainerStyle: { background: '#fff', zIndex: 9 }
      };

    let cardToShow;
    let imagen = <ReactImageMagnify {...imageProps} />;

    let arrow = (
        <Link activeClass="active" to={"t"+(props.index+1)} spy={true} 
        smooth={true} offset={0} duration={500}>
            <i class="material-icons arrow">
                keyboard_arrow_down
            </i>
        </Link>
    );

    if (props.index > 4) {
        arrow = (
            <Link activeClass="active" to={"toolbar"} spy={true} 
            smooth={true} offset={0} duration={500}>
                <i class="material-icons arrow">
                    keyboard_arrow_up
                </i>
            </Link>
        );
    }

    cardToShow = (
        <ScrollAnimation animateIn="fadeIn" className="row">
        <Element className="elemento" name={"t"+props.index}>
            <div className="rowTarjeta">
                <div className="tarjeta">
                    <header className="orange down-bar">
                        <h1>{props.title}</h1>
                    </header>
                    <article className="tarjeta-body">
                        <p>{props.body}</p>
                        <div className="tarjeta-img">
                            {imagen}
                        </div>
                        {arrow}
                    </article>
                </div>
            </div>
        </Element>
        </ScrollAnimation>
    );


    return cardToShow;
    
}