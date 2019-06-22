import React from 'react';
// import logo from './logo.svg';
import imag from './img/Captura.JPG';
import './App.css';
console.log(imag)
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="login-app">
      <img src={imag} alt="Smiley face" height="42" width="42"/>

      </div>
    </div>
  );
}

export default App;
