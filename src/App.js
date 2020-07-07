import React from 'react';
import './App.css';
import Auth  from './Auth';

function App() {
  const firebase = useFirebaseApp();
  
  console.log(firebase);
  return (
    <div className="App">
      <p>usuario:</p>
      <Auth/>
    </div>
  );
}

export default App;
