import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Navigation from './components/layout/Navigation';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Introduction from '../src/components/layout/Introduction';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile-forms/CreateProfile";
import EditProfile from "./components/profile-forms/EditProfile";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Reviews from "./components/reviews/Reviews";
import Review from "./components/review/Review";
import MoviesTab from './components/layout/MoviesTab';
import Popup from './components/layout/Popup';
import PrivateRoute from "./components/routing/PrivateRoute";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./components/utils/setAuthToken";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const APIURL = 'http://www.omdbapi.com/?apikey=7805adc9';
  const search = (e) => {
    if (e.key === "Enter") {
      // The "s" stands for search.
      fetch(APIURL + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
  <Provider store={store}>
  <Router>
  <Fragment>
    <Navigation />
    <Route exact path='/' component={ Introduction } />
    <section className='container'>
    <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/reviews" component={Reviews} />
        <PrivateRoute exact path="/reviews/:id" component={Review} />
        <PrivateRoute exact path="/movies-tab" component={MoviesTab} />
      </Switch>
    </section>
  </Fragment>
  </Router>
    {typeof state.selected.Title != "undefined" ? (
            <Popup selected={state.selected} closePopup={closePopup} />
          ) : (
            false
          )}
  </Provider>
  )
};

export default App;
