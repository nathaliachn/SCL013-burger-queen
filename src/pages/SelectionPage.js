import React from 'react'
import { Link } from 'react-router-dom';
// import Button from '../componentes/button';
import '../img/Inicio.css';

export const SelectionPage = () => {
return (
    <div id= 'selection'>
    <section id='waiterSection'>
     <Link to= '/login'>
        <button id='waiterButton'type="button" title='Mesero' class="btn btn-primary btn-lg btn-block"></button>
         </Link>
    </section>
    <section id='chefSection'>
     <Link to= '/login'>
        <button  id='chefButton' type="button" title='Cocina' class="btn btn-primary btn-lg btn-block"></button>
         </Link>
    </section>
    </div>
)
}
