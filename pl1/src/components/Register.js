import React, {useState} from 'react';

const Register = (props) => {
    const [nuser, setUser] = useState("");
    const [npassword, setPassword] = useState("");
    const [dpassword,setdPassword] = useState("");

    const onChange = (e) => {
        console.log(e.target.name)
        if (e.target.name === "nuser"){
            setUser(e.target.value)
        }
        else if (e.target.name === "npassword"){
            setPassword(e.target.value)
        }
        else if (e.target.name === "dpassword"){
            setdPassword(e.target.value)
        }
    }

    const onSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        if (npassword === dpassword){
            alert("Registro exitoso")
            props.cambioR(true)
        }
        else {
            alert("Las contraseñas no coinciden")
        }
    }

    <h1 style={{color: "black", textAlign: 'center'}}>Registro de usuario</h1>
    
    return(
        <form action="" onSubmit={onSubmit}>

            <div>
                <label htmlFor='nuser'>Usuario</label>
                <input 
                    type="text" 
                    name="nuser" 
                    id="nuser"
                    value={nuser}
                    onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor='npassword'>Contraseña</label>
                <input 
                    type="password" 
                    name="npassword" 
                    id="npassword"
                    value={npassword}
                    onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor='dpassword'>Confirme Contraseña</label>
                <input 
                    type="password" 
                    name="dpassword" 
                    id="dpassword"
                    value={dpassword}
                    onChange={onChange}
                />
            </div>
            
            <button>Registrarse</button>
        </form>
    );
}

export default Register;