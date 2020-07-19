import React, { useState } from 'react'
import { Cronometro } from '../componentes/cronometro'
import { BtnCronometro } from '../componentes/botonCronometro'
import { PedidoCocina } from '../componentes/PedidoCocina'
import { Link } from 'react-router-dom';
import { auth } from "../firebaseConfig";

export const VistasCocinero = () => {

  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({
      ms: updatedMs,
      s: updatedS,
      m: updatedM,
      h: updatedH
    });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 })
  };

  const resume = () => start();

  const cerrarSesion = () => {
    auth.signOut().then(function () {
      console.log('Sign-out successful')
    }).catch(function (error) {
      // An error happened.
    });
  }


  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <Link to='/'>
            <button onClick={cerrarSesion}>Cerrar Sesión</button>
          </Link>
          <PedidoCocina />
          <Cronometro time={time} />
          <BtnCronometro status={status}
            resume={resume}
            reset={reset}
            stop={stop}
            start={start} />
        </div>
      </div>
    </div>
  );
}
