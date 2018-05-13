import React, { Component } from 'react';
import './Mapa.css';

class Mapa extends Component {
    //Adiciona ao objeto state o props url
    constructor(props) {
        super(props)
        this.state = {url: props.url}
    }

    //captura o que foi digitado no input
    aoDigitar = (event) => {
        this.props.mapa.origin = event.target.value;
        // console.log(this.props);
    }

    //verifica se o valor do input e undefined se sim faz a chamada pra uma url da api maps com o local Av. Paulisa...
    //Se não altera a url para uma chamada de rota (por enquanto estatica de oslo a telemark)
    alteraURL = () => {
        if (this.props.mapa.origin !== undefined){
            this.state.url = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyCudc77iZfKUdVmfNyt8OunMXJh659fCJA&origin=Oslo+Norway&destination=Telemark+Norway&avoid=tolls|highways`;
            console.log(this.state.url);
        } else {
            console.log(this.state.url);
        }
    }

    //quando o botao é clicado a function altera url é chamada 
    aoClicar = () => {
        let endereco = this.props.mapa.origin;
        this.alteraURL()
        console.log(endereco)
    }

    
    // converteURL = (endereco) => {
    //     for (let letra of endereco) {
    //         if (letra === " ") {
    //             letra += "+";
    //         }
    //         console.log(letra);
    //     }
    // }

    render() {
        return (
            <div className="mapa">
                <div>
                    <h3>Digite seu endereço e saiba o melhor caminho até nossa loja!</h3>
                    <input type="text" placeholder="Endereço" onChange={this.aoDigitar} />
                    <button onClick={this.aoClicar}>TRAÇAR ROTA</button>
                </div>
                <div>
                    <iframe
                        width="600"
                        height="450"
                        title="mapa"
                        style={{ border: 0 }}
                        src={this.props.url}>
                    </iframe>  
                </div>
            </div>
        );
    }
}

export default Mapa;