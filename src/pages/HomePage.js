import React from 'react';
import '../img/Inicio.css';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import theCakeHouse from '../img/theCakeHouse.png'

export const HomePage = () => {
  return (
    <Fragment>
      <div className='btnGroup'>
          <p id='btnRParagraf'>Estamos muy felices de incorporarte en el equipo!</p>
          <Link to="/register" className='btnR'>Registrate</Link> 
      </div>
      <div id='startBackground'>
        <div className="imagenFondo">
          <img className="fondo" alt="" src={theCakeHouse} />
        </div>
        <h1 id='startTittle'>
          The cake <br></br>house</h1>
        <Link to='/selection'>
          <button id='startButton'>Comenzar</button>
        </Link>
      </div>
    </Fragment >
  );
}