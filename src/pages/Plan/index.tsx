import Layout from "../../components/Layout";
import './plan.scss'
import {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../helpers/axios";
import {v4 as uuid4} from "uuid";
import Steps from "../../components/Steps";
import InfoPlan from "../../components/InfoPlan";
import {Coverage} from "../../interface";
import MountPlan from "../../components/MountPlan";
import {RimacContext} from "../../context/rimacContext";

const Plan = () => {

    const { addCoverage, rimacState, deleteCoverage } = useContext(RimacContext);
    const { coverage } = rimacState

    const [sumaAsegurada, setSumaAsegurada] = useState<number>(14500)
    const [llantaRobada, setLlantaRobada] = useState<Coverage[]>([]);
    const [choque,setChoque] = useState<Coverage[]>([]);

    const [showCoberturaChoque, setShowCoberturaChoque] = useState(true);
    const [atropello,setAtropello] = useState<Coverage[]>([]);
    const [base,setBase] = useState<number>(20)

    const [model] = useState<string>("HRV");
    const [year] = useState("2017")
    const [brand] = useState<string>("Honda");

    const navigate = useNavigate();


    useEffect(() => {


        const showRobadas = async () => {
            const rob = coverage.filter(item => item.type ==="robada");
            setLlantaRobada(rob);
        }

        const showChocados = async () => {
            const muertos = coverage.filter(item => item.type ==="choque");
            setChoque(muertos);
        }

        const showAtropellados = async () => {
            const atro = coverage.filter(item => item.type ==="atropello");
            setAtropello(atro);
        }


        if(sumaAsegurada > 16000 && showCoberturaChoque && choque.length > 0) {
            setShowCoberturaChoque(false);
            setBase(base - 20);
        }

        if(sumaAsegurada > 15900 && sumaAsegurada < 16100 && !showCoberturaChoque && choque.length > 0) {
            setShowCoberturaChoque(true);
            setBase(base + 20);
        }

        showChocados();
        showAtropellados();
        showRobadas();

    },[sumaAsegurada, coverage,setBase]);


    const agregarCobertura = async (type : string) => {
        if(type === "robada") {
            const data = {
                type: "robada",
                id: uuid4(),
                name: "Llanta de repuesto",
                price: 15,
                description: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici,na llego a la academia que está en el centro delpueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más"
            }
            const response = await axios.post('/coverages',data);
            addCoverage(response.data);
            setBase(base + 15);
        } else if (type === "choque") {
            const data = {
                type: "choque",
                id: uuid4(),
                name: "Analisis de motor",
                price: 20,
                description: "He chocado con mi carro cuando he salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici,na llego a la academia que está en el centro delpueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más"
            }
            const response = await axios.post('/coverages',data);
            addCoverage(response.data);
            setBase(base + 20);
        } else if (type === "atropello") {
            const data = {
                type: "atropello",
                id: uuid4(),
                name: "Aros gratis",
                price: 50,
                description: "He sufrido un atropello con mi carro cuando he salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici,na llego a la academia que está en el centro delpueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más"
            }
            const response = await axios.post('/coverages',data);
            addCoverage(response.data);
            setBase(base + 50);
        }
    }


    const eliminarCobertura = async  (id : string) => {
        await axios.delete(`/coverages/${id}`);
        deleteCoverage(id);
    }

    const autoincremet = () => {
        setSumaAsegurada(sumaAsegurada + 100);
        if(sumaAsegurada > 16000 && showCoberturaChoque && choque.length > 0) {
            setBase(base - 20);
        }
    }

    const decrement = () => {
        setSumaAsegurada(sumaAsegurada - 100);
        if(sumaAsegurada < 16000 && !showCoberturaChoque && choque.length < 0) {
            setBase(base + 20);
        }
    }

    const iWant = () => {
        const data = {
            total: base,
            model,
            year,
            brand,
        }
        localStorage.setItem('detail', JSON.stringify(data));
        navigate('/gracias')
    }

    return (
        <Layout>
            <div className="grid__plan">
                <Steps />

                <InfoPlan
                    decrement={decrement}
                    sumaAsegurada={sumaAsegurada}
                    autoincremet={autoincremet}
                    llantaRobada={llantaRobada}
                    choque={choque}
                    eliminarCobertura={eliminarCobertura}
                    agregarCobertura={agregarCobertura}
                    atropello={atropello}
                    showCoberturaChoque={showCoberturaChoque}
                />

                <MountPlan
                    coverage={coverage}
                    iWant={iWant}
                    base={base}
                />
            </div>
        </Layout>
    )
}

export default Plan