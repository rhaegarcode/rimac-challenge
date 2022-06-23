import './steps.scss'
import backphone from "../../images/backphone.png";
import {useNavigate} from "react-router-dom";

const Steps = () => {

    const navigate = useNavigate();

    return (
        <div className="steps__plan">
            <div className="step__desktop">
                <div className="step__one">
                    <span>1</span> <p>Datos</p>
                </div>
                <div className="dashed"></div>
                <div className="step__two">
                    <span>2</span> <p>Arma tu plan</p>
                </div>
            </div>

            <div className="step__phone">
                <div className="back">
                    <img style={{cursor: "pointer"}} onClick={() => navigate(-1)} src={backphone} alt="boton regresar"/>
                    <p>paso 2 de 2</p>
                    <div className="progress"></div>
                </div>
            </div>
        </div>
    )
}

export default Steps;