import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';


export default (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');  

    const firebase = useFirebaseApp();
    const user = useUser();

    const sumbit = async ()=>{
     await firebase.auth().createUserWithEmailAndPassword(email,password);

    }
    return(
        <div>
            <div>
                <label htmlFor="email">Correo electronico</label>
                <input type="email" ide="email" onChange={ (ev)=>setEmail(ev.target.value) } />
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" onChange={ (ev)=>setPassword(ev.target.value) } />
                <button onClick={sumbit}>Registrar</button>
            </div>

        </div>
    )
}