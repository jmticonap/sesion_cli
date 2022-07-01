//import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Actividad from './Actividad'

function ActivityList(props) {
  
  const [actividades, setActividades] = useState([0])
  let arreglo = []

  useEffect(() => {
    //arreglo.push(actividades)
    //arreglo.push(actividades)
    //setActividades(actividades)
    console.log(actividades)
  })

  return (
    <>
      <button onClick={() => setActividades( [...actividades, actividades.length] )}>Agregar Actividad</button>
      <div name="actividad_list">
        {
          actividades?.map( (actividad, index) => <Actividad key={`actividad-${index}`} />)
        }
      </div>
    </>
    
  ) 
  
}

export default ActivityList