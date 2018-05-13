import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mapa from './components/Mapa/Mapa';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';

class App extends Component {
  componentWillMount(){
    this.mapa = {};
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
        {/* <Mapa mapa={this.mapa}/> */}
      </div>
    );
  }
}

export default App;
