import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';
import { SelectionPage } from '../pages/SelectionPage';
import { Registro } from '../pages/Auth.jsx'
import { Login } from '../pages/LoginPage';
import { VistasMesero } from '../pages/VistaMesero';
import { VistasCocinero } from '../pages/VistaCocinero';
import { LoginC } from '../pages/LoginCocina';
import { PedidosAServir } from '../pages/PedidosAServir'

export const AppRouter = () => {
  return (
    <Router>
        <Switch>
        <Route path="/PedidosAServir" component={PedidosAServir} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/selection" component={SelectionPage} />
        <Route path="/register" component={Registro} />
        <Route path="/login" component={Login} />
        <Route path="/loginCocina" component={LoginC} />
        <Route path="/mesero" component={VistasMesero} />
        <Route path="/cocinero" component={VistasCocinero} />
        <Route path="/" component={HomePage} />

      </Switch>

    </Router>
  );
}