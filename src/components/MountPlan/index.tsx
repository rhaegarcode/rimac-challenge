import check from "../../images/check.png";
import {Coverage} from "../../interface";
import './mount.scss'

interface Props {
    base: number,
    coverage: Coverage[],
    iWant: any
}

const MountPlan = ({base,coverage,iWant}: Props) => {
    return (
        <div className="mount__plan">
            <div className="mount__content">
                <p className="mount">Monto</p>
                <div>
                    <h4>$ { base }.00</h4>
                    <span className="phone">mensual</span>
                </div>
                <span className="desktop">mensuales</span>
                <div className="separator">
                </div>
                <div className="includes">
                    <p>El precio incluye:</p>
                    {
                        coverage.length > 0 ? coverage.map(item => {
                                return (
                                    <div key={item.id}>
                                         <ul>
                                             <li>
                                                 <img src={check} alt=""/>
                                                 <span>{item.name}</span>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }) :
                            <>
                                <p className="no__data">Aun no se han agregado ninguna cobertura</p>
                            </>
                    }
                </div>
                <div className="form__button">
                    <button onClick={iWant}>Lo quiero</button>
                </div>
            </div>
        </div>
    )
}

export default MountPlan