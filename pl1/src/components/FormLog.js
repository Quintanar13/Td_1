import React, {useState} from 'react';
import Boton from '../styles/boton';
import Register from "./Register";

const FormLog = (props) => {
    //const [variable, función]  useState(valor a guardar)
    const [logreg, cambioR] = useState(true);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    
    const onChange = (e) => {
        console.log(e.target.name)
        if (e.target.name === 'user'){
            setUser(e.target.value)
        }
        else if (e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }
    const onSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        if (user === {user} && password === {password}){
            alert("correcto")
            props.cambioS(true)
        }
        else {
            alert("incorrecto")
            setUser("")
            setPassword("")
        }
    }
    return (  
        <>
            {logreg === true ? (
                <form action="" onSubmit={onSubmit}>
                <p>Usuario: {user}</p>
    
                <div>
                    <label htmlFor='user'>Usuario</label>
                    <input 
                        type="text" 
                        name="user" 
                        id="user"
                        value={user}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Contraseña</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <button>Iniciar sesión</button>
                <Boton onClick={() => cambioR(false)}>Registrate</Boton>

            </form>
            ):(
                <>
                    <Register cambioR = {cambioR}/>
                </>
            )}
        </>
        
    );
}
 
export default FormLog;