import React from 'react';
<<<<<<< HEAD
import { useFirebaseApp } from 'reactfire';
=======
import './App.css';
import Auth  from './Auth';

>>>>>>> dd1cb182eca3ab69837d6aeb35f5a6d7110348ff
function App() {
  const firebase = useFirebaseApp();
  
  console.log(firebase);
  return (
<<<<<<< HEAD
       <div className='container'>
      <h1>NavBar</h1>
      <hr />
      
     </div>
    
=======
    <div className="App">
      <p>usuario:</p>
      <Auth/>
    </div>
>>>>>>> dd1cb182eca3ab69837d6aeb35f5a6d7110348ff
  );
}

export default App;
