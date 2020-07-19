import React from 'react'
import { Link } from 'react-router-dom';
import '../img/Inicio.css';
import imagerGarzon from '../img/imagerGarzon.jpg'
import imagenPastelera from '../img/imagenPastelera.jpg'

export const SelectionPage = () => {
     return (
          <div id='selection'>
               <section id='waiterSection'>
                    <Link to='/mesero'>
                         <img className="imagenSelection" alt="" src={imagerGarzon} />
                         <button id='waiterButton' type="button" title='Mesero' class="btn btn-primary btn-lg btn-block">Mesero</button>
                    </Link>
               </section>
               <section id='chefSection'>
                    <img className="imagenSelection" alt="" src={imagenPastelera} />
                    <Link to='/cocinero'>
                         <button id='chefButton' type="button" title='Cocina' class="btn btn-primary btn-lg btn-block">Cocina</button>
                    </Link>
               </section>
          </div>
     )
}
