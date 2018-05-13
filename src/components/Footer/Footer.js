import React, { Component } from 'react';
import './Footer.css';
// Images
import logo from '../Header/images/logo.png'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <img src={logo} alt="logo"/>
                <div>
                    <p>Desenvolvido por James Almeida</p>
                </div>
            </div>
        );
    }
}

export default Footer;