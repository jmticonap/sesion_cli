//import { render } from '@testing-library/react';
import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import Actividad from './Actividad'

function ActivityList(props) {

    //var arr_actividades = [];
    //var conter=1;
    /*
    function addActividad(){
      //var act = React.createElement(Actividad,{}, '');
      //arr_actividades.push( act );
      const element = document.querySelector("div[name='actividad_list']")
      ReactDOM.createPortal(<Actividad />, element);
    }*/
    const [actividades, setActividades] = useState([])
    const [ actualizacion, setActualizacion ] = useState(false)
    let arreglo = [...actividades]

  useEffect(() => {
    arreglo.push("actividad")
    setActividades(arreglo)
    console.log(arreglo)
  },[actualizacion])
  

  return (
    <>
      <button onClick={() => setActualizacion(!actualizacion)}>Agregar Actividad</button>
      <div name="actividad_list">
        {
          arreglo?.map( (actividad, index) => <Actividad key={`actividad-${index}`} />)
        }
      </div>
    </>
    
  ) 
  
}

export default ActivityList