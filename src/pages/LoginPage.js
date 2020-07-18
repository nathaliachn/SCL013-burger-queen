import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import { withRouter } from "react-router-dom";
//import '../img/Inicio.css';
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
    props.history.push('/selection')
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
    <div className='fondo2'>
    <di id="">

    </di>
    <div className="mt-5">
    <div className= "row justify-content-center" >
   <div className="col-12 col-sm-8 col-md-6 col-xl-4" id="contenedorLogin">
             <form  onSubmit={procesarDatos}>
             {
                 error && (
                     <div className="alert alert-danger">
                         {error}
                     </div>
                 ) 
             }
   
         <h1>¡Inicia tu Sesión!</h1>
         <label htmlFor="email">Correo electronico</label>
         <input type="email" className="form-control mb-2" id="email" onChange={ (ev)=>setEmail(ev.target.value) } />
         <label htmlFor="password">Contraseña</label>
         <input type="password" className="form-control mb-2" id="password" onChange={ (ev)=>setPassword(ev.target.value) } />
         <button className="btn btn-lg btn-dark btn-block" onClick={ login }>Iniciar Sesión</button>
       
         </form>
         </div>
         </div>
 </div> 
 </div>
)
}
export default withRouter(Login)