import React from "react";
import "./agenda.css"
import {ReactComponent as Logo} from "./Agenda.svg"

//Se tiver alguma duvida de para que serve cada comando ver em "pacientes.jsx" que detalho tudo

const Agenda=(onClick)=>{

    return (
    
    <button onClick={onClick}  className="agenda-container">
        <Logo className="logo"/>
     
    </button>


    )
}
export default Agenda;