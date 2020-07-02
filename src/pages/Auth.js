import React, {useState} from 'react';
import 'firebase/firebase-auth'
import { useFirebaseApp, useUser } from 'reactfire';


export const Auth = (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const firebase = useFirebaseApp();
    const user = useUser();
    const submit = async ()=>{
        await firebase.auth().createUserWithEmailAndPassword(email,password);
    }
return(
    <div>
        { user.email } 
        <div>
            <label htmlFor='email'>Correo electrónico</label>
            <input type='email' id='email' onChange={(ev)=> setEmail(ev.target.value)}></input>
            <label htmlFor='password'>Contraseña</label>
            <input type='password' id='password' onChange={(ev)=> setPasword(ev.target.value)}></input>
           <button onClick= {submit}> Iniciar Sesión</button>
        </div>
    </div>
)

}
