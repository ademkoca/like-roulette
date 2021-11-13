import React from 'react';
import './App.css';
import { useState } from "react";
import Nav from './components/Nav';
import Home from './components/Home';
import User from './components/User';
import About from './components/About'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import {BrowserRouter as Router, Link} 

function App() {

  const [authenticated, setAuthenticated] = useState(true);
  const username = "jayden_may";
  const ThemeContext = React.createContext(username);
  return (
    <>
      <Router>
        <Nav username={authenticated ? username : "Hello, stranger"} />

        <Switch>
          <Route exact path="/" >
            <Home username={username} />
          </Route>
          <Route exact path="/user/:username">
            <User username={username} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>



  )


}

export default App;
