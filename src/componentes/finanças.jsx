import React from "react";
import "./finanças.css"
import {ReactComponent as Logo} from "./Finanças.svg"

//Se tiver alguma duvida de para que serve cada comando ver em "pacientes.jsx" que detalho tudo
const Finanças=(onClick)=>{

    return (
    
    <button onClick={onClick}  className="finanças-container">
        <Logo className="logo"/>
     
    </button>


    )
}
export default Finanças;