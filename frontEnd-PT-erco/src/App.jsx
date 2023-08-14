import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AgregarProyecto from './components/AgregarProyecto';
import EliminarProyecto from './components/EliminarProyectos';

function App() {
  
  const [proyectos, setProyectos] = useState([]);
  const [verProyectos, setVerProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [verDetalles, setVerDetalles] = useState(null);


  const peticionGet= async () =>{
    await axios.get("http://localhost:3000/api/proyectos")
    .then(response=>{
      setProyectos(response.data);
      setVerProyectos(response.data);

    }).catch(error=>{
      console.log(error);
    })
  }

  const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }
  

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = verProyectos.filter((elemento) => {
      return elemento.system_name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase());
    });
    setProyectos(resultadosBusqueda);
  }

  const openModal = (project) => {
    setVerDetalles(project);
  };

  const closeModal = () => {
    setVerDetalles(null);
  };

  useEffect(() =>{
    peticionGet();
  },[])
  return (

    <div className='App'>

     <div className="containerInput">
        <div>
          <EliminarProyecto></EliminarProyecto>
        </div>
        <div>
          <AgregarProyecto></AgregarProyecto>
        </div>
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por Nombre"
          onChange={handleChange}
        />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
      
    <div className="container">
      <div className="row">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <>
                  <h5 className="card-title">Nombre: {proyecto.system_name}</h5>
                  <p className="card-text">Generación actual: {proyecto.total_generation}</p>
                  <p className="card-text">Generación total: {proyecto.current_generation}</p>
                  <p className="card-text">Potencia instalada: {proyecto.installed_power} kW</p>
                </>
                <button onClick={() => openModal(proyecto)}>Ver Más</button>

              </div>
            </div>
          </div>  
        ))}
      </div>
    </div>
    <Modal
        isOpen={verDetalles !== null}
        onRequestClose={closeModal}
        contentLabel="Detalles del Proyecto"
      >
        {verDetalles && (
          <div className="modal-content">
            <h2>Detalles del Proyecto</h2>
            <p>Id: {verDetalles.system_name}</p>
            <p>Nombre: {verDetalles.system_name}</p>
            <p>Ubicación: {verDetalles.location}</p>
            <p>Inversor: {verDetalles.inverter_brand}</p>
            <p>Panel: {verDetalles.panel_brand}</p>
            <p>Energia del panel: {verDetalles. panel_power}</p>
            <p>Calidad del panel: {verDetalles.panel_quantity}</p>
            <p>Generación actual: {verDetalles.total_generation}</p>
            <p>Generación total: {verDetalles.current_generation}</p>
            <p>Potencia instalada: {verDetalles.installed_power} kW</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        )}
      </Modal>
  </div>
  )
}
export default App
