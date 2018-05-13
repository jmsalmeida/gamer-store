import React, { Component } from 'react';

class Mapa extends Component {
    aoDigitar = (event) => {
        this.props.mapa.origin = event.target.value;
        console.log(this.props);
    }

    converteURL = () => {
        let urlChange = this.props.mapa.origin;
        for (letra of urlChange){
            if(letra === " "){
                letra += "+";    
            }
            console.log(letra);
        }
    }
    
    render() {
        return (
            <div>
                <input type={Text} placeholder="Endereço" onChange={this.aoDigitar} />
                <iframe width="600" height="450" frameborder="0" style={{border:0}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ0bVo5shZzpQRSdcxxmsfbEI&key=AIzaSyCudc77iZfKUdVmfNyt8OunMXJh659fCJA" allowfullscreen></iframe>
                <p>{this.props.mapa.origin}</p>
            </div>
        );
    }
}

export default Mapa;