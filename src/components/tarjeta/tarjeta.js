import React from "react";
import ReactImageMagnify from "react-image-magnify";

export default (props) => {

    let cardToShow;

    if (props.type % 2 === 1) {
        cardToShow = (
            <div className="rowTarjeta">
                <div className="tarjeta">
                    <header>
                        <h3>{props.title}</h3>
                    </header>
                    <article>
                        <p>{props.body}</p>
                    </article>
                </div>
                <div>
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: props.imagen
                        },
                        largeImage: {
                            src: props.imagen,
                            width: 1200,
                            height: 1800
                        }
                    }} />
                </div>
            </div>
        )
    } else {
        cardToShow = (
            <div className="rowTarjeta">
                <div>
                    <img width="250px" src={props.img}></img>
                </div>
                <div className="tarjeta">
                    <header>
                        <h3>{props.title}</h3>
                    </header>
                    <article>
                        <p>{props.body}</p>
                    </article>
                </div>
            </div>
        );
    }
    return cardToShow;
    
}