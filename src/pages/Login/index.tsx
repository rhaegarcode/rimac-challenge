import './login.scss'
import girl from '../../images/girl.png';
import select from '../../images/chevrot.png'
import Layout from "../../components/Layout";
import {useContext, useState} from "react";
import { v4 as uuid4 } from 'uuid'
import { useNavigate } from "react-router-dom";
import {RimacContext} from "../../context/rimacContext";

const Login = () => {

    const { addClient } = useContext(RimacContext);

    const [dni, setDni] = useState<string>("");
    const [phone,setPhone] = useState<string>("");
    const [license,setLicense] = useState<string>("");
    const [checked,setChecked] = useState<boolean>(false);
    const [errorDni,setErrorDni] = useState<string>("");
    const [errorPhone, setErrorPhone] = useState<string>("");
    const [errorLicense,setErrorLicense] = useState<string>("")

    const navigate = useNavigate()

    const contactLogin = async () => {
        if(dni === "") {
            setTimeout(() => {
                setErrorDni("");
            },3000)
            return setErrorDni("El DNI es obligatorio");
        }
        if(phone === "") {
            setTimeout(() => {
                setErrorPhone("");
            },3000)
            return setErrorPhone("El Celular es obligatorio");
        }
        if(license === "") {
            setTimeout(() => {
                setErrorLicense("");
            },3000)
            return setErrorLicense("La Placa es obligatorio");
        }
        if(!checked) {
            setTimeout(() => {
                setErrorLicense("");
            },3000)
            return setErrorLicense("Debes aceptar los términos y condiciones");
        }

        const client = {
            id: uuid4(),
            dni,
            phone,
            license
        }

        localStorage.setItem('client', JSON.stringify(client));
        addClient(client);
        navigate('/arma-tu-plan');

    }

    function onlyNumbers(e:any) {
        if (e.keyCode < '48' || e.keyCode > '57') {
            e.preventDefault()
        }
    }


    return (
        <Layout>
            <div className="login__wrapper">
                <div className="login__container">
                    <div className="login__picture">
                        <div className="picture__content">
                            <div className="info">
                                <img src={girl} alt="mujer de fondo"/>
                                <div>
                                    <span>¡Nuevo!</span>
                                    <div className="picture__info">
                                        <p>Seguro<strong>Vehicular Tracking</strong></p>
                                    </div>
                                    <p className="text">Cuentanos donde le haras seguimiento a tu seguro</p>
                                </div>

                            </div>
                        </div>
                        <p className="copy">© 2021 RIMAC Seguros y Reaseguros.</p>
                    </div>
                    <div className="login__content--form">
                        <div className="form__content">
                            <div className="form">
                                <h1>Déjanos tus datos</h1>
                                <div className="form__group">
                                    <select>
                                        <option value="DNI">DNI</option>
                                    </select>
                                    <img src={select} alt=""/>
                                    <input
                                        type="text"
                                        placeholder="Nro. de doc"
                                        className="input__grid"
                                        maxLength={8}
                                        onChange={(e) => setDni(e.target.value)}
                                        onKeyDown={onlyNumbers}

                                    />
                                </div>
                                <div className="errors">
                                    { errorDni && (<p>{errorDni}</p>) }
                                </div>
                                <div className="form__control">
                                    <input
                                        maxLength={9}
                                        onChange={(e) => setPhone(e.target.value)}
                                        type="text"
                                        placeholder="Celular"
                                        onKeyDown={onlyNumbers}
                                    />
                                </div>
                                <div className="errors">
                                    { errorPhone && (<p>{errorPhone}</p>) }
                                </div>
                                <div className="form__control">
                                    <input onChange={(e) => setLicense(e.target.value)} type="text" placeholder="Placa"/>
                                </div>
                                <div className="errors">
                                    { errorLicense && (<p>{errorLicense}</p>) }
                                </div>
                                <div className="form__checkbox">
                                    <label className="container">
                                        <input type="checkbox" checked={checked} onChange={()=> setChecked(!checked)} />
                                        <span className="checkmark"></span>
                                    </label>
                                    <p>Acepto la <span>Política de Protecciòn de Datos Personales</span> y los <span>Términos y Condiciones.</span></p>
                                </div>
                                <div className="form__button">
                                    <button onClick={contactLogin}>Cotízalo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login;