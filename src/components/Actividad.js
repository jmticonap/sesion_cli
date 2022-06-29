import React from 'react'
import './actividad.css'

function Actividad(props) {
  return (
    <div className='actividad_input' key={props.id}>
      <h2>Actividad</h2>
      <input type="text" name="actividad_title" placeholder='Titulo de la actividad ...' />
      <textarea placeholder='Detalle de la actividad ...' name='actividad_content'></textarea>
      <div className='bar_recursos'>
        <h3>Recursos</h3>
        <button> + Local</button>
        <button> + Externo</button>
      </div>
    </div>
  )
}

export default Actividad