import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from '../../components/header';
import BikeGenerator from '../bikeGenerator';
import BikeFinder from '../bikeFinder';


import './styles.css';

const App = () => {

  return (
    <div className="app-container">
      <Router>
        <Header />
        <Switch>
          <Route path="/bike-finder" component={BikeFinder} />
          <Route path="/bike-generator" component={BikeGenerator} />
          <Redirect from="*" to="/bike-finder" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;