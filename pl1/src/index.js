import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
//Importar componentes
import Alumno from './components/Alumno';
import Counter from './components/Counter';
import FormLog from './components/FormLog';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Jsx = () => {
  const [sesion, cambioS] = useState(false);
  
  return (
    <>
      {sesion === true ? (
        <>
          <Alumno/>
          <Counter/>
          <button onClick={() => cambioS(false)}>Cerrar sesión</button>
        </>
      ):(
        <>
          <h2 style={{color: "black", textAlign: 'center'}}>Inicia Sesión</h2>
          <FormLog cambioS={cambioS}/>
        </>
      )}
    </>

  );
};

root.render(<Jsx/>);