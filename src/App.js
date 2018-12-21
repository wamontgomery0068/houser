import React, { Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

// Appears in each page
import Header from "./component/Header/Header";

// Store and Routes
import store from "./ducks/store";
import routes from "./routes"
import './App.css';

class App extends Component {

  render() {

    return (

      <Provider store={store}>

        <Router>

          <div className = "App_Container">

            <Header />

            <div className = "MainContent_Container"> {routes} </div>

          </div>

        </Router>

      </Provider>

    );
  }
}

export default App;
