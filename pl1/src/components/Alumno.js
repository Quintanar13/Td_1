import React from 'react';
import Title from "./Title";

const Alumno = () => {
    const alumnos = ["Andrea", "Aldo", "Abraham", "Pablo"];
    
    return (
      <>
            <h1 className = 'titulo' style={{color: 'black'}}>Hola!</h1>
            <Title alumno = "Alfredo Quintanar" matricula = "187905" color = "blue"/>
            <h2 className= "listAl" style = {{color: 'green'}}>Lista de alumnos: </h2>
            <ul>
              {alumnos.map((nombre, i) => {
                return <Title alumno = {nombre} matricula = {i} color = "darkgreen"/>
              })}
            </ul>
      </>
    )
  };

  export default Alumno;