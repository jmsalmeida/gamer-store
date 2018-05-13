import React, { Component } from 'react';
import './Mapa.css';

class Mapa extends Component {
    aoDigitar = (event) => {
        this.props.mapa.origin = event.target.value;
        // console.log(this.props);
    }

    aoClicar = () => {
        let endereco = this.props.mapa.origin;
        console.log(endereco);
    }
    
    converteURL = () => {
        let urlChange = this.props.mapa.origin;
        for (let letra of urlChange) {
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
                        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ0bVo5shZzpQRSdcxxmsfbEI&key=AIzaSyCudc77iZfKUdVmfNyt8OunMXJh659fCJA"
                        allowfullscreen>
                    </iframe>
                    
                </div>
                
            </div>
        );
    }
}

export default Mapa;