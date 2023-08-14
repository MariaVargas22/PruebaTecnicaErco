import React, { useState } from 'react';
import axios from 'axios';

function EliminarProyecto(){
    const [verForm, setVerForm] = useState(false);
    const [idToDelete, setIdToDelete] = useState('');
    const [mensaje, setMensaje] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const response = await axios.delete(`http://localhost:3000/api/proyectos/${idToDelete}`);
        console.log('Solicitud enviada:', response.data);
        setMensaje('Registro eliminado correctamente');
      } catch (error) {
        console.error('Error al enviar la solicitud:', error);
        setMensaje('Error al eliminar el registro');
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
                value={idToDelete}
                onChange={(e) => setIdToDelete(e.target.value)}
              />
            </label>
            <button type="submit">Eliminar</button>
            <p>{mensaje}</p>
          </form>
        )}

        <button onClick={() => setVerForm(!verForm)}>Eliminar Proyecto</button>

      </div>

      
    );
  }
  
export default EliminarProyecto;