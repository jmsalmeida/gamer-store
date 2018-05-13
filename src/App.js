import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mapa from './components/Mapa/Mapa';

class App extends Component {
  componentWillMount(){
    this.mapa = {};
  }

  render() {
    return (
      <div className="App">
        
        {/* <Mapa mapa={this.mapa}/> */}
      </div>
    );
  }
}

export default App;
