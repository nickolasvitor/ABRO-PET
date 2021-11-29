import React from "react";
import "./voltar.css"
import {ReactComponent as Logo} from "./voltar.svg"

//Se tiver alguma duvida de para que serve cada comando ver em "pacientes.jsx" que detalho tudo

const Voltar=(onClick)=>{

    return (
    
    <button onClick={onClick}  className="voltar-container">
        <Logo className="logo"/>
     
    </button>


    )
}
export default Voltar;