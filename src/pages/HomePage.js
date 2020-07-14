import React from 'react';
import '../img/Inicio.css';
import { Link } from 'react-router-dom';
//import Button from '../componentes/button';
import { Fragment } from 'react';

export const HomePage = () => {
  return (
    <Fragment>
      <div className='fondo'>
        <p id='identificador'>The cake house</p>
        <Link to='/selection'>
          <button>Comenzar</button>
        </Link>
      </div>
    </Fragment >
  );
}