import React from 'react';
import { useFirebaseApp } from 'reactfire';
function App() {
  const firebase = useFirebaseApp();
  
  console.log(firebase);
  return (
       <div className='container'>
      <h1>NavBar</h1>
      <hr />
      
     </div>
    
  );
}

export default App;
