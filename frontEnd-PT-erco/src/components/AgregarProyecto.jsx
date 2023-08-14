import React, { useState } from 'react';
import axios from 'axios';

function AgregarProyecto() {
  const [verForm, setVerForm] = useState(false);
  const [datosForm, setDatosForm] = useState({
    system_name: '',
    location: '',
    inverter_brand: '',
    panel_brand: '',
    panel_power:'',
    panel_quantity: '',
    installed_power: '',
    current_generation: '',
    total_generation: ''

  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/api/proyectos', datosForm);
      console.log('Solicitud enviada:', response.data);
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <div>
     
      {verForm && (
        <form onSubmit={handleSubmit}>
          <label>
            system_id:
            <input
              type="number"
              value={datosForm.system_id}
              onChange={(e) => setDatosForm({ ...datosForm, system_id: e.target.value })}
            />
          </label>
          <label>
            system_name:
            <input
              type="text"
              value={datosForm.system_name}
              onChange={(e) => setDatosForm({ ...datosForm, system_name: e.target.value })}
            />
          </label>
          <label>
          location:
            <input
              type="text"
              value={datosForm.location}
              onChange={(e) => setDatosForm({ ...datosForm, location: e.target.value })}
            />
          </label>
          <label>
          inverter_brand:
            <input
              type="text"
              value={datosForm.inverter_brand}
              onChange={(e) => setDatosForm({ ...datosForm, inverter_brand: e.target.value })}
            />
          </label>
          <label>
          panel_brand:
            <input
              type="text"
              value={datosForm.panel_brand}
              onChange={(e) => setDatosForm({ ...datosForm, panel_brand: e.target.value })}
            />
          </label>
          <label>
          panel_power:
            <input
              type="number"
              value={datosForm.panel_power}
              onChange={(e) => setDatosForm({ ...datosForm, panel_power: e.target.value })}
            />
          </label>
          <label>
          panel_quantity:
            <input
              type="number"
              value={datosForm.panel_quantity}
              onChange={(e) => setDatosForm({ ...datosForm, panel_quantity: e.target.value })}
            />
          </label>
          <label>
          installed_power:
            <input
              type="number"
              value={datosForm.installed_power}
              onChange={(e) => setDatosForm({ ...datosForm, installed_power: e.target.value })}
            />
          </label>
          <label>
          current_generation:
            <input
              type="number"
              value={datosForm.current_generation}
              onChange={(e) => setDatosForm({ ...datosForm, current_generation: e.target.value })}
            />
          </label>
          <label>
          total_generation:
            <input
              type="number"
              value={datosForm.total_generation}
              onChange={(e) => setDatosForm({ ...datosForm, total_generation: e.target.value })}
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      )}

        <button onClick={() => setVerForm(!verForm)}>Agregar Proyecto</button>
    </div>
  );
}

export default AgregarProyecto;

