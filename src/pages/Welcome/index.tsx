import Layout from "../../components/Layout";
import happy from '../../images/ilustration.png'
import boyPhone from '../../images/boyphone.png'
import './welcome.scss'
import {useContext, useEffect} from "react";
import {RimacContext} from "../../context/rimacContext";

const Welcome = () => {

    const { addDetail,rimacState } = useContext(RimacContext);
    const { detail } = rimacState

    useEffect(() => {
        const storageDetail = localStorage.getItem('detail');
        if(storageDetail) {
            addDetail(JSON.parse(storageDetail));
        }
    },[])

    return (
        <Layout>
            <div className="grid__welcome">
               <div className="ilustration">
                   <img className="phone" src={boyPhone} alt="" />
                   <img className="desktop" src={happy} alt=""/>
               </div>
                <div className="welcome__content">
                    <div>
                        <h5><span>¡Te damos la bienvenida! </span>
                            Cuenta con nosotros para proteger de tu vehículo</h5>
                        <div className="result">
                            <p><span>Modelo:</span> {detail.model}</p>
                            <p><span>Marca:</span> {detail.brand}</p>
                            <p><span>Año:</span> {detail.year}</p>
                            <p><span>Total:</span> {detail.total}</p>
                        </div>
                        <p>Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:</p>
                        <span className="email">diego.ortega.devcode@gmail.com</span>
                        <button className="button">
                            cómo usar mi seguro
                        </button>
                    </div>
                </div>
                <footer>
                    <p>© 2021 RIMAC Seguros y Reaseguros.</p>
                </footer>
            </div>
        </Layout>
    )
}

export default Welcome;