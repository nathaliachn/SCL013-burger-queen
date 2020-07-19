import React from 'react';

export const BtnCronometro = (props) => {
  return (
    <div className='main-section'>
      {(props.status === 0) ?
        <button onClick={props.start}>Comenzar</button> : ''
      }
      {(props.status === 1) ?
        <div>
          <button onClick={props.stop}>Stop</button>
          <button onClick={props.reset}>Reset</button>
        </div> : ''
      }
      {(props.status === 2) ?
        <div>
          <button onClick={props.resume}>Resumen</button>
          <button onClick={props.reset}>Reset</button>
        </div> : ''
      }
    </div>
  );
}
export default BtnCronometro;