import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import { withRouter } from "react-router-dom";
import '../img/Login.css'


export const Registro = (props) => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');  
    const [error, setError] = useState(null);
    const firebase = useFirebaseApp();
    //const user = useUser();

    const submit = async ()=>{
        
    try {
    const registo = await firebase.auth().createUserWithEmailAndPassword(email,password);
    console.log (registo.user)
       
    setEmail('');
    setPassword('');
    setError(null); 
    props.history.push('/login')

    
  }
        catch (error) {
            console.log(error)
            // setError(error.message)
            if(error.code === 'auth/email-already-in-use'){
                setError('Usuario ya registrado...')
                return
            }
            if(error.code === 'auth/invalid-email'){
                setError('Email no válido')
                return
            }
        }
    }
    const procesarDatos = e => {
        e.preventDefault()
        e.preventDefault()
        if(!email.trim() ){
          setError('Debe ingresar un email!')
            console.log('Ingrese email!')
            return
        }
        if(!password.trim()){
          setError('Debe ingresar una contraseña!')
            console.log('ingrese contraseña')
            return
        }
        if(password.length < 6){
          setError('Su contraseña de tener mínimo 6 caracteres!')
          console.log('6 o más carácteres')
          return
      }
      setError(null)
      console.log('Validaciones correctas')
    
     
    }
    return(
            <div className='registerontainer'>
            <div className="mt-5"></div>
            <div id='fotoRegisterSection'></div>
            <div id="formRegisterSection">
                    <form onSubmit={procesarDatos}>
                    {
                        error && (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        ) 
                    }
          
                <h1 id='registerTitle'>¡Regístrate!</h1>
                <label id='emailRegisterLabel'htmlFor="email">Correo electronico</label>
                <input id='emailRegisterImput'type="email" onChange={ (ev)=>setEmail(ev.target.value) } />
                <label id='passwordRegisterLabel' htmlFor="password">Contraseña</label>
                <input id='passwordRegisterImput'type="password"  onChange={ (ev)=>setPassword(ev.target.value) } />
                <button id='registerButton'onClick={ submit }>Registrar</button>
                </form>
                </div>
                </div>
    )
}
export default withRouter(Registro)