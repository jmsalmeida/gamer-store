import React, { Component } from 'react';
import './Produto.css';

class Produto extends Component {
    render() {
        let imagem = this.props.imagem
        let descricao = this.props.descricao;
        let preco = this.props.preco;
        return (
            <div className="produto">
                <div>
                    <img src={imagem} />
                    <strong>R$ {preco}</strong>
                    <p>{descricao}</p>
                    <div className="btns">
                        <input type="number" placeholder="0" className="border"/>
                        <button className="border">adicionar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Produto;