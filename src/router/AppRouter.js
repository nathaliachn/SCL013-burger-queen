import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  //NavLink
} from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { ContactPage } from '../pages/ContactPage';
import { SelectionPage } from '../pages/SelectionPage';
import { Auth } from '../pages/Auth';

export const AppRouter = () => {
  return (
    <Router>
      <div className ='container-mt-5'>
        <div className ='btn-group'>
           <Link to="/register" className='btn btn-dark'>Registrate</Link>
            <Link to="/contact" className='btn btn-dark'>Nosotros</Link>
        </div>

        <Switch>
                    
          <Route path="/register" component= { RegisterPage } />
          <Route path="/contact" component= { ContactPage } />
          <Route path="/selection" component= { SelectionPage } />
          <Route path="/iniciarSesion" component= { Auth } />
          <Route path="/" component= { HomePage } />   
                
        </Switch>
      </div>
    </Router>
  );
}