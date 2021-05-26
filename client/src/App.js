import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Navigation from './components/layout/Navigation';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import "./App.css";
const App = () => (
  <Router>
  <Fragment>
    <Navigation />
    <Route exact path='/' component={ Landing } />
    <section className='container'>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </section>
  </Fragment>
  </Router>
);

export default App;
