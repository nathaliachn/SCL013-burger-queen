import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import { withRouter } from "react-router-dom";
import '../img/Login.css'

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');  
    const [error, setError] = useState(null);
    const firebase = useFirebaseApp();
   
    const login = async ()=>{
        try{
         const logeado =   await firebase.auth().signInWithEmailAndPassword(email,password);
         console.log (logeado.user)
    setEmail('')
    setPassword('')
    setError(null)
    props.history.push('/mesero')
        }
        catch (error) {
            console.log(error)
            // setError(error.message)
            if(error.code === 'auth/user-not-found'){
                setError('Email no registrado')
                return
            }
            if(error.code === 'auth/wrong-password'){
                setError('Contraseña invalida')
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

return (
    <div className='loginContainer'>
    <div className="mt-5">
    <div id='fotoSection'></div>
    <div id="formSection">
             <form onSubmit={procesarDatos}>
             {
                 error && (
                     <div className="alert alert-danger">
                         {error}
                     </div>
                 ) 
             }
         <h1 id='loginTitle'>Inicio de sesión <br></br>mesero</h1>
         <label htmlFor="email"id='emailLabel' >Correo electronico</label>
         <input type="email" id="emailImput" onChange={ (ev)=>setEmail(ev.target.value) } />
         <label id='passwordLabel' htmlFor="password">Contraseña</label>
         <input type="password" id="passwordImput" onChange={ (ev)=>setPassword(ev.target.value) } />
         <button id='loginButton' onClick={ login }>Iniciar Sesión</button>
     
         </form>
         </div>
         </div>
 </div>
)
}
export default withRouter(Login)