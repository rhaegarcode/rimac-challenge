import './header.scss'
import logo from '../../images/logo.png'
import phone from '../../images/phone.png'
import {useContext, useEffect} from "react";
import {RimacContext} from "../../context/rimacContext";

const Header = () => {

    const { rimacState } = useContext(RimacContext);
    const { client } = rimacState

    return (
        <header className={client.license !== "" ? ' header' : '' }>
            <div className="header__container">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="menu__header">
                    <ul>
                        <li>
                            <a className="question" href="">¿Tienes alguna duda?</a>
                        </li>
                        <li>
                            <img src={phone} alt=""/>
                            <a className="phone" href="">(01) 411 6001</a>
                            <a className="desktop" href="">Llámanos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;