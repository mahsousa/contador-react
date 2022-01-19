import React from "react";
import './App.css';

import Contador from "./Components/Contador/contador";
import Card from "./Components/layout/Card";

export default _ => {
    return (
        <div className="App">
            <h1>Exercício Contador</h1>

            <div className="Cards">
            <Card titulo="Contador" cor="#CD6C5C">
                <Contador numeroInicial={10}></Contador>
                </Card>
            </div>
        </div>
    )
}