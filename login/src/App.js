import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'

import { Route , Switch } from 'react-router-dom';


import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";



class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
      </Switch>
    );
  }
}

export default App;
