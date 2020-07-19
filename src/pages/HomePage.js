import React from 'react';
import '../img/Inicio.css';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

export const HomePage = () => {
  return (
    <Fragment>
<<<<<<< HEAD
      <div id='startBackground'>
        <h1 id='startTittle'>
          The cake <br></br>house</h1>
        <Link to='/selection'>
          <button id ='startButton'>Comenzar</button>
=======
      <div className='fondo'>
        <p id='identificador'>The cake house</p>
        <Link to='/login'>
          <button>Comenzar</button>
>>>>>>> 24832c9300bf45ffc471f30fb8e1cfd514d345e8
        </Link>
      </div>
    </Fragment >
  );
}