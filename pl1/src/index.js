import React from 'react';
import ReactDOM from 'react-dom/client';
//Importar componentes
import Alumno from './components/Alumno';

const root = ReactDOM.createRoot(document.getElementById('root'));
const sesion = true;

//Fragments
const jsx = (
  <>
    {sesion === true ? (
      <>
        <Alumno/>
      </>
    ) : (
      <h2>No has iniciado sesión</h2>
    )}
  </>
);    

/*
const compruebaSesion = (sesion) => {
  if (sesion === true){
    return jsx;
  } 
  else {
    return <h2>No has iniciado sesión</h2>
  }
}
*/
root.render(jsx);
