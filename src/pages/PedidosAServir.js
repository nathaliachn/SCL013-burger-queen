import React from 'react'
import '../img/cocina.css'
import PedidosListos from '../componentes/pedidoListo';
import { Link } from 'react-router-dom';

export const PedidosAServir = () => {
  return (
    <div> 
    <Link to='/mesero'>
        <button className="botonAtras" >Atrás</button>
        </Link>     
     <PedidosListos/>
    </div>
  );
}
