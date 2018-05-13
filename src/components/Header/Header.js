import React, { Component } from 'react';
import './Header.css';
// Images
import logo from './images/logo.png'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <header>
                    <nav>
                        <img src={logo} alt="logo"/>
                        <ul>
                            <a>inicio</a>
                            <a>produtos</a>
                            <a>chegue até nós</a>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;
