import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <header style={{
          backgroundColor: '#282c34', minHeight: '100vh', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', fontSize: 'calc(10px + 2vmin)', color: 'white'}}
        >
          <img src={logo} style={{animation: 'App-logo-spin infinite 20s linear', height: '40vmin'}}  alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a style={{color: '#61dafb'}} href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
