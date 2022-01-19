import React from "react";
import "./contador.css"

import Display from "./Display";
import Botoes from "./Botoes";
import Passos from "./Passos";
export default class Contador extends React.Component {

    state = { //componentes do contador
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }



    incrementar = () => { //função arrow
        this.setState({
            numero: this.state.numero + this.state.passo, //incrementar a cada passo
        })
    }

    setPasso = (novoPasso) => { //evento
        this.setState({
            passo: novoPasso,
        })
    }

    decremento = () => { //função arrow
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>{/*Puxando informação de display.jsx*/}
                {/*<p>Valor Inicial: {this.props.numeroInicial}</p>*/}
                <Passos passo={this.state.passo} setPasso ={this.setPasso}></Passos>{/*Puxando informações de Passos*/}
                <Botoes setIncrementar={this.incrementar} setDecremento={this.decremento}></Botoes> {/* Puxando informações de Botoes*/}
            </div>
        )
    }

}