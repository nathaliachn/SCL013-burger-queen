import React from 'react'
import { Link } from 'react-router-dom';
import '../img/Inicio.css';
import imagerGarzon from '../img/imagerGarzon.jpg'
import imagenPastelera from '../img/imagenPastelera.jpg'

export const SelectionPage = () => {
     return (
          <div id='selection'>
               <section id='waiterSection'>
                    <Link to='/login'>
                         <img className="imagenSelection" alt="" src={imagerGarzon} />
                         <button id='waiterButton' type="button" title='Mesero'>Mesero</button>
                    </Link>
               </section>
               <section id='chefSection'>
                    <Link to='/loginCocina'>
                         <img className="imagenSelection" alt="" src={imagenPastelera} />
                         <button id='chefButton' type="button" title='Cocina'>Cocina</button>
                    </Link>
               </section>
          </div>
     )
}
