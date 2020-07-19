import React from 'react';
import '../img/Inicio.css';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import theCakeHouse from '../img/theCakeHouse.png'

export const HomePage = () => {
  return (
    <Fragment>
      <div id='startBackground'>
        <div className="imagenFondo">
          <img className="fondo" alt="" src={theCakeHouse} />
        </div>
        <h1 id='startTittle'>
          The cake <br></br>house</h1>
        <Link to='/login'>
          <button id='startButton'>Comenzar</button>
        </Link>
      </div>
    </Fragment >
  );
}