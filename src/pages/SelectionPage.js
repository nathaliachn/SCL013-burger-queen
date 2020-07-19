import React from 'react'
import { Link } from 'react-router-dom';
import '../img/Inicio.css';

export const SelectionPage = () => {
return (
    <div id= 'selection'>
          <section id='waiterSection'>
               <Link to= '/login'>
               <div id='waiterPicture'></div>
               <button id='waiterButton'type="button">Mesero</button>
               </Link>
          </section>
          <section id='chefSection'>
               <img src="../fotopastelero.png" alt="" id="waiterpicture"></img>
               <Link to= '/login'>
               <button  id='chefButton' type="button">Cocina</button>
               </Link>
          </section>
    </div>
     )
}
