import React from 'react';
import '../img/Inicio.css';
import { Link } from 'react-router-dom';
import Button from '../componentes/button'
import { Fragment } from 'react';


export const HomePage = () => {
  return (
    <Fragment>
        <div className="container">
        <div className='fondo'>
        <div>
          <section id= 'identificador'> 
          <p>The cake house</p>
          </section>
        <div className='botonBienvenida'>
          <Link to= '/selection'>
        <Button type="button" title='Comenzar' id='btn1'></Button>
         </Link>
         </div>
         </div>
        </div>
        
         
        
        </div>
  
        </Fragment>   
    );
  }


