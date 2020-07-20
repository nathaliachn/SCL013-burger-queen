import React from 'react'
import { PedidoCocina } from '../componentes/PedidoCocina'
import { Link } from 'react-router-dom';
import { auth } from "../firebaseConfig";
import '../img/cocina.css'

export const VistasCocinero = () => {

  const cerrarSesion = () => {
    auth.signOut().then(function () {
      console.log('Sign-out successful')
    }).catch(function (error) {
      // An error happened.
    });
  }


  return (
    <div>      
          <Link to='/'>
            <button className="cerrarSesion" onClick={cerrarSesion}>Cerrar Sesión</button>
          </Link>
          <PedidoCocina />
        </div>
  );
}
