import React, { Component } from 'react';
import './App.css';
import Mapa from './components/Mapa/Mapa';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Produto from './components/Produto/Produto';
// Images
import pc from './images/pc-gamer1.png'
import Footer from './components/Footer/Footer';

class App extends Component {
  componentWillMount() {
    this.mapa = {};
  }

  render() {
    let desc = "PC G-FIRE AMD A4 7300 8GB 1TB Radeon HD8470D 2GB Integrada Computador Gamer Hermes V GKH HTG-96";

    // let local = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ0bVo5shZzpQRSdcxxmsfbEI&key=AIzaSyCudc77iZfKUdVmfNyt8OunMXJh659fCJA`;
    
    let localURL = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ0bVo5shZzpQRSdcxxmsfbEI&key=AIzaSyCudc77iZfKUdVmfNyt8OunMXJh659fCJA`;

    // console.log(local)
    return (
      <div className="App">
        <Header />
        <Banner />
        <div className="container">
          <div className="produtos">
            <h2>produtos</h2>
            <div>
              <Produto imagem={pc} preco="1.999,00" descricao={desc} />
              <Produto imagem={pc} preco="1.999,00" descricao={desc} />
              <Produto imagem={pc} preco="1.999,00" descricao={desc} />
              <Produto imagem={pc} preco="1.999,00" descricao={desc} />
              <Produto imagem={pc} preco="1.999,00" descricao={desc} />
            </div>
            <h2>produtos</h2>
            <div>
              <Produto imagem={pc} preco="1.999,00" descricao={desc} />
              <Produto imagem={pc} preco="1.999,00" descricao={desc} />
              <Produto imagem={pc} preco="1.999,00" descricao={desc} />
              <Produto imagem={pc} preco="1.999,00" descricao={desc} />
              <Produto imagem={pc} preco="1.999,00" descricao={desc} />
            </div>
          </div>
          <Mapa mapa={this.mapa} url={localURL} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
