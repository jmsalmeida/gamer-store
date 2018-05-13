import React, { Component } from 'react';
import './Mapa.css';

class Mapa extends Component {
    constructor(props) {
        super(props)
        this.state = {url: props.url}
    }

    aoDigitar = (event) => {
        this.props.mapa.origin = event.target.value;
        // console.log(this.props);
    }

    alteraURL = () => {
        this.setState({ url: this.state.url });

        // let rota = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyCudc77iZfKUdVmfNyt8OunMXJh659fCJA&origin=Oslo+Norway
        // &destination=Telemark+Norway&avoid=tolls|highways`;
        
        if (this.props.mapa.origin !== undefined){
            this.state.url = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyCudc77iZfKUdVmfNyt8OunMXJh659fCJA&origin=Oslo+Norway&destination=Telemark+Norway&avoid=tolls|highways`;
            console.log(this.state.url);
        } else {
            console.log(this.state.url);
        }
    }

    aoClicar = () => {
        let endereco = this.props.mapa.origin;
        this.alteraURL()
    }

    converteURL = (endereco) => {
        for (let letra of endereco) {
            if (letra === " ") {
                letra += "+";
            }
            console.log(letra);
        }
    }

    render() {
        return (
            <div className="mapa">
                <div>
                    <h3>Digite seu endereço e saiba o melhor caminho até nossa loja!</h3>
                    <input type={Text} placeholder="Endereço" onChange={this.aoDigitar} />
                    <button onClick={this.aoClicar}>TRAÇAR ROTA</button>
                </div>
                <div>
                    <iframe
                        width="600"
                        height="450"
                        frameborder="0"
                        style={{ border: 0 }}
                        // src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyCudc77iZfKUdVmfNyt8OunMXJh659fCJA&origin=Oslo+Norway&destination=Telemark+Norway&avoid=tolls|highways`}
                        src={this.props.url}
                        allowfullscreen>
                    </iframe>
                    
                </div>
                
            </div>
        );
    }
}

export default Mapa;