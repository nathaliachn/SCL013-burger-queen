import React from 'react'
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import '../img/Inicio.css';

export const SelectionPage = () => {
return (
    <div id= 'selection'>
          <section id='waiterSection'>
               <Link to= '/login'>
               <div id='waiterPicture'></div>
               <button id='waiterButton'type="button" title='Mesero' class="btn btn-primary btn-lg btn-block">Mesero</button>
               </Link>
          </section>
          <section id='chefSection'>
               <img src="../fotopastelero.png" alt="" id="waiterpicture"></img>
               <Link to= '/login'>
               <button  id='chefButton' type="button" title='Cocina' class="btn btn-primary btn-lg btn-block">Cocina</button>
               </Link>
          </section>
    </div>
     )
=======

export const SelectionPage = () => {
    return (
        <div id='selection'>
            <div>
                <section>
                    <Link to='/mesero'>
                        <button>Mesero</button>
                    </Link>
                </section>
                <section>
                    <Link to='/cocinero'>
                        <button>Cocinero</button>
                    </Link>
                </section>
            </div>
        </div>
    );
>>>>>>> 24832c9300bf45ffc471f30fb8e1cfd514d345e8
}
