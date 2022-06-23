import './info.scss';

import back from "../../images/back.png";
import boy from "../../images/boy.png";
import menos from "../../images/menos.png";
import plus from "../../images/suma.png";
import robada from "../../images/robada.png";
import quitar from "../../images/quitar.png";
import agregar from "../../images/agregar.png";
import choques from "../../images/choque.png";
import atropellos from "../../images/atropello.png";
import {Coverage} from "../../interface";
import {Fragment, useContext} from "react";
import {RimacContext} from "../../context/rimacContext";
import {useNavigate} from "react-router-dom";

interface Props {
    decrement: any,
    sumaAsegurada: any,
    autoincremet: any,
    llantaRobada: Coverage[],
    choque: Coverage[],
    eliminarCobertura: any,
    agregarCobertura: any,
    atropello: Coverage[],
    showCoberturaChoque: boolean,
}


const InfoPlan = ({decrement,sumaAsegurada,autoincremet,llantaRobada,choque,eliminarCobertura,agregarCobertura,atropello,showCoberturaChoque}: Props) => {

    const { rimacState } = useContext(RimacContext);
    const { client } = rimacState
    const navigate = useNavigate();

    return (
        <div className="info__plan">
            <div className="back">
                <img style={{cursor: "pointer"}} onClick={() => navigate(-1)} src={back} alt="boton regresar"/>
                <p>volver</p>
            </div>
            <div className="welcome">
                <div className="greet">
                    <p>¡Hola, <span>Diego!</span></p>
                </div>
                <p className="phone">Mira las coberturas</p>
                <small>Conoce las coberturas para tu plan</small>
            </div>
            <div className="card__plan">
                <div className="card__info">
                    <p>Placa: {client.license} </p>
                    <span>Wolkswagen 2019 Golf</span>
                </div>
                <div></div>
                <img src={boy} alt="chico del plan"/>
            </div>

            <div className="calc__plan">
                <div>
                    <p>Indica la suma asegurada</p>
                    <div>
                        <span>MIN $12,500</span> | <span>MAX $16,500</span>
                    </div>
                </div>
                <div className="input__calc">
                    <img  onClick={decrement} src={menos} alt=""/>
                    <input onChange={() => {}} value={`$ `+ sumaAsegurada}  type="text"/>
                    <img onClick={autoincremet} src={plus} alt=""/>
                </div>
            </div>
            <div className="separator"></div>
            <div className="coberturas">
                <h3>Agregue o quita coberturas</h3>
                <div className="layout">
                    <input name="nav" type="radio" defaultChecked className="nav home-radio" id="home"/>
                    <div className="page home-page">
                        <div className="page-contents">

                            <div className="coberturas__info">
                                <div className="cobertura__info--content">
                                    <div className="cobertura__header">
                                        <img src={robada} alt="llanta robada"/>
                                        <span>Llanta robada</span>
                                    </div>
                                    <div className="cobertura__info--example">
                                        {
                                            llantaRobada.length > 0 ? llantaRobada.map((llanta, index) => {
                                                    return (
                                                        <Fragment  key={index}>
                                                            <div className="options__cobertura">
                                                                <>
                                                                    <img
                                                                        onClick={() => eliminarCobertura(llanta.id)}
                                                                        src={quitar}
                                                                        alt="eliminar"/><small>Quitar</small>
                                                                </>
                                                            </div>
                                                            <p>{llanta.description}</p>
                                                        </Fragment>
                                                    )
                                                }) :
                                                <>
                                                    <div className="options__cobertura">
                                                        <>
                                                            <img
                                                                onClick={() => agregarCobertura("robada")}
                                                                src={agregar}
                                                                alt="agregar"/><small>Agregar</small>
                                                        </>
                                                    </div>
                                                </>
                                        }
                                    </div>
                                </div>
                            </div>

                            {
                                showCoberturaChoque && <>
                                    <div className="separator"></div>
                                    <div className="coberturas__info">
                                        <div className="cobertura__header">
                                            <img src={choques} alt="llanta robada"/>
                                            <span>Choque y/o pasarte la luz roja </span>
                                        </div>
                                        <div className="cobertura__info--example">
                                            {
                                                choque.length > 0 ? choque.map((choq, index) => {
                                                        return (
                                                            <Fragment key={index}>
                                                                <div className="options__cobertura" key={index}>
                                                                    <>
                                                                        <img
                                                                            onClick={() => eliminarCobertura(choq.id)}
                                                                            src={quitar}
                                                                            alt="eliminar"/><small>Quitar</small>
                                                                    </>
                                                                </div>
                                                                <p>{choq.description}</p>
                                                            </Fragment>
                                                        )
                                                    }) :
                                                    <>
                                                        <div className="options__cobertura">
                                                            <>
                                                                <img
                                                                    onClick={() => agregarCobertura("choque")}
                                                                    src={agregar}
                                                                    alt="agregar"/><small>Agregar</small>
                                                            </>
                                                        </div>
                                                    </>
                                            }
                                        </div>
                                    </div>

                                </>
                            }
                            <div className="separator"></div>
                            <div className="coberturas__info">
                                <div className="cobertura__header">
                                    <img src={atropellos} alt="llanta robada"/>
                                    <span>Atropello en la vía Evitamiento </span>
                                </div>
                                <div className="cobertura__info--example">
                                    {
                                        atropello.length > 0 ? atropello.map((atro, index) => {
                                                return (
                                                    <Fragment key={index}>
                                                        <div className="options__cobertura" key={index}>
                                                            <>
                                                                <img
                                                                    onClick={() => eliminarCobertura(atro.id)}
                                                                    src={quitar}
                                                                    alt="eliminar"/><small>Quitar</small>
                                                            </>
                                                        </div>
                                                        <p>{atro.description}</p>
                                                    </Fragment>
                                                )
                                            }) :
                                            <>
                                                <div className="options__cobertura">
                                                    <>
                                                        <img
                                                            onClick={() => agregarCobertura("atropello")}
                                                            src={agregar}
                                                            alt="agregar"/><small>Agregar</small>
                                                    </>
                                                </div>
                                            </>
                                    }
                                </div>
                            </div>
                            <div className="separator"></div>
                        </div>
                    </div>
                    <label className="nav" htmlFor="home">
                                <span>
                                  Protege tu auto
                                </span>
                    </label>
                    <input name="nav" type="radio" className="about-radio" id="about"/>
                    <div className="page about-page">
                        <div className="page-contents">
                        </div>
                    </div>
                    <label className="nav" htmlFor="about">
                                <span>
                                 Protege a los que te rodean
                                </span>
                    </label>
                    <input name="nav" type="radio" className="contact-radio" id="contact"/>
                    <div className="page contact-page">
                        <div className="page-contents">
                        </div>
                    </div>
                    <label className="nav" htmlFor="contact">
                                <span>
                                Mejora tu plan
                                </span>
                    </label>
                </div>
            </div>

        </div>
    )
}

export default InfoPlan;