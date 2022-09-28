import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const name = 'Alfredo';
const sesion = true;
const apellido = 'Quintanar';
const alumnos = ["Andrea", "Aldo", "Abraham"];
//Fragments
const jsx = (
  <>
    {sesion === true ? (
      <>
        <h1 className='Titulo1' style={{color:'blue'}}>Hello there {name}</h1>
        {apellido && <p>Tu apellido es {apellido}</p>}

        <h3>Lista de alumnos</h3>
        <ul>
          {alumnos.map((nombre) => {return <li>{nombre}</li>})}
        </ul>
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
