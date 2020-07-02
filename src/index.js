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
