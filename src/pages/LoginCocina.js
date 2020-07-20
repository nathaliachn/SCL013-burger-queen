import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import { withRouter } from "react-router-dom";
import '../img/LoginCocina.css'

export const LoginC = (props) => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');  
    const [error, setError] = useState(null);
    const firebase = useFirebaseApp();
   
    const loginC = async ()=>{
        try{
         const logeado =   await firebase.auth().signInWithEmailAndPassword(email,password);
         console.log (logeado.user)
    setEmail('')
    setPassword('')
    setError(null)
    props.history.push('/cocinero')
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
    <div className='loginKitchenContainer'>
    <div className="mt-5">
    <div id='fotoKitchenSection'></div>
    <div id="formKitchenSection">
             <form onSubmit={procesarDatos}>
             {
                 error && (
                     <div className="alert alert-danger">
                         {error}
                     </div>
                 ) 
             }
         <h1 id='loginKitchenTitle'>Inicio de sesión <br></br> cocina</h1>
         <label htmlFor="email"id='emailKitchenLabel' >Correo electronico</label>
         <input type="email" id="emailKitchenImput" onChange={ (ev)=>setEmail(ev.target.value) } />
         <label id='passwordKitchenLabel' htmlFor="password">Contraseña</label>
         <input type="password" id="passwordKitchenImput" onChange={ (ev)=>setPassword(ev.target.value) } />
         <button id='loginKitchenButton' onClick={ loginC }>Iniciar Sesión</button>
     
         </form>
         </div>
         </div>
 </div>
)
}
export default withRouter(LoginC)