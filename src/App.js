//import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Actividad from './components/Actividad';
import ActivityList from './components/ActivityList';

function App() {

  /**
   * Creando lista en json de las entidades receptoras para el lado de los datos
   * {
   *  'title':'titulo de actividad',
   *  'content':'Contenido de la actividad.'
   * }
   */
  const makeJson = () => {
    var objJson = [];
    var titulos = document.getElementsByName("actividad_title");
    var contenidos = document.getElementsByName("actividad_content");

    for (let i = 0; i < titulos.length; i++) {
      objJson.push(
        {
          'title': titulos[i].value,
          'content': contenidos[i].value
        }
      );
    }

    return objJson;
  }

  var activityList = React.createElement(ActivityList,{},'');

  const addActividad = () => {
    
  }

  return (
    <>
      <button onClick={makeJson}>Mostrar JSON</button>
      <button onClick={addActividad}>Agregar Actividad</button>
      {activityList}
    </>
  )

  // (
  //   <>
  //     <button onClick={makeJson}>Mostrar JSON</button>
  //     <button onClick={addActividad}>Agregar Actividad</button>
  //     <div name="actividad_list">
  //       <Actividad></Actividad>
  //       <Actividad></Actividad>
  //     </div>
  //   </>
  // );
}

export default App;
