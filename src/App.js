import React from 'react';
import './App.css';
import { useState } from "react";
import Nav from './components/Nav';
import Home from './components/Home';

function App() {

  const [authenticated, setAuthenticated] = useState(true);
  const username = "jayden_may";
  return (
    <>
      <Nav username={authenticated ? username : "Hello, stranger"} />
      <Home username={username} />
    </>



  )


}

export default App;
