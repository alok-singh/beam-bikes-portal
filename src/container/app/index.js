/* 
  App Container
  This is the entry point of the application
*/

// Libraries
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// Containers
import Header from '../../components/header';
import Footer from '../../components/footer';

// Components
import BikeGenerator from '../bikeGenerator';
import BikeFinder from '../bikeFinder';

// Configurations
import { config } from '../../config/vars';

// Stylesheets
import './styles.css';

const App = () => {
  const { header, footer } = config;
  return (
    <div className="app-container">
      <Router>
        <Header config={header} />
        <Switch>
          <Route exact path="/bike-finder" component={BikeFinder} />
          <Route exact path="/bike-generator" component={BikeGenerator} />
          <Redirect from="*" to="/bike-finder" />
        </Switch>
        <Footer config={footer} />
      </Router>
    </div>
  );
}

export default App;