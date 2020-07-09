import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import App from './App';
=======
//import App from './App';
>>>>>>> edbc3f2a860d97104c75c171641bd4e88da492a8
//import * as serviceWorker from './serviceWorker';
import firebaseConfig from './firebaseConfig';
import {
  FirebaseAppProvider }
from 'reactfire'
import { AppRouter } from './router/AppRouter';


ReactDOM.render((
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Conectando la app'}>
     <AppRouter/>
    </Suspense>
  </FirebaseAppProvider>
),document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
