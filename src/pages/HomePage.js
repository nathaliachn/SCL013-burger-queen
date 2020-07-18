import React from 'react';
import '../img/Inicio.css';
import { Link } from 'react-router-dom';
//import Button from '../componentes/button';
import { Fragment } from 'react';

export const HomePage = () => {
  return (
    <Fragment>
      <div id='startBackground'>
        <h1 id='startTittle'>
          The cake <br></br>house</h1>
        <Link to='/selection'>
          <button id ='startButton'>Comenzar</button>
        </Link>
      </div>
    </Fragment >
  );
}