import ReactDom from "react-dom" //exibir algo na tela
import React from "react" // importando react para usar codigos HTML
import "./index.css" //Importando aplicação CSS

import App from "./App"


ReactDom.render(
    <App />,
    document.getElementById('root')
)
