import React from "react";
import "./relatorio.css"
import {ReactComponent as Logo} from "./Relatorios.svg"

//Se tiver alguma duvida de para que serve cada comando ver em "pacientes.jsx" que detalho tudo

const Relatorio=(onClick)=>{

    return (
    
    <button onClick={onClick}  className="relatorio-container">
        <Logo className="logo"/>
     
    </button>


    )
}
export default Relatorio;