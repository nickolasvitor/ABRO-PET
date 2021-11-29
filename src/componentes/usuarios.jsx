import React from "react";
import "./usuario.css"
import {ReactComponent as Logo} from "./Usuarios.svg"

//Se tiver alguma duvida de para que serve cada comando ver em "pacientes.jsx" que detalho tudo

const Usuario=(onClick)=>{

    return (
    
    <button onClick={onClick}  className="usuario-container">
        <Logo className="logo"/>
     
    </button>


    )
}
export default Usuario;