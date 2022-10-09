import React from 'react';

const Title = (alumno, matricula, color) => {
    //const name = 'Alfredo';
    return (
        <h1 className='Titulo1' style={{color:color}}>Bienvenido de vuelta {alumno}|| ID: {matricula}</h1>
    );
};

export default Title;