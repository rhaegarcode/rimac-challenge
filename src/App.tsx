import {useContext, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./pages/Login/index";
import Plan from "./pages/Plan";
import Iwant from "./pages/Welcome";
import {RimacContext} from "./context/rimacContext";

function App() {

    const { addClient,addDetail } = useContext(RimacContext);

    useEffect(() => {
        const storageClient = localStorage.getItem('client');
        const storageDetail = localStorage.getItem('detail');
        if(storageClient) {
            addClient(JSON.parse(storageClient))
        }
        if(storageDetail) {
            addDetail(JSON.parse(storageDetail));
        }
    },[])


  return (

      <Router>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/arma-tu-plan" element={<Plan />} />
              <Route path="/gracias" element={<Iwant />} />
          </Routes>
      </Router>
  );
}

export default App;
