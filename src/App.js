/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import './App.css';

function App() {


  /*Write code to create a reference variable using useRef for the input tag */

  const handleClick = () => {

    //write code here to focus on the input reference.

  };

  return (
    <div class="App-header">
      <input type="text" /*ref= reference here to the variable created*/ />
      <button onClick={handleClick}>Focus Input</button>
      <p className="extra-text">Tap Here</p>
    </div>
  );
}

export default App;
