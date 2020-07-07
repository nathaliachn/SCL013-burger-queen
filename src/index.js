<<<<<<< HEAD
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom'; 
import { AppRouter } from './router/AppRouter';
import firebaConfi from './Configure-fire'
import { FirebaseAppProvider } from 'reactfire'


ReactDOM.render((
  <FirebaseAppProvider firebaConfi={firebaConfi}>
    <Suspense fallback={'Conectando la app'}>
  <AppRouter />
  </Suspense>
  </FirebaseAppProvider>
),
  document.getElementById('root')
);
=======
import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebaseConfig from './firebaseConfig';
import {
  FirebaseAppProvider }
from 'reactfire'


ReactDOM.render((
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Conectando la app'}>
     <App />
    </Suspense>
  </FirebaseAppProvider>
),document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> dd1cb182eca3ab69837d6aeb35f5a6d7110348ff
