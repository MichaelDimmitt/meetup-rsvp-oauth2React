import React, { Component } from 'react';
import '../App.css';

class HomePage extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <header style={{
          backgroundColor: '#282c34', minHeight: '100vh', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', fontSize: 'calc(10px + 2vmin)', color: 'white'}}
        >
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

export default HomePage;
