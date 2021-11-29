import React from "react";
import "./menu.css"
import {ReactComponent as Logo} from "./menu.svg"

//Se tiver alguma duvida de para que serve cada comando ver em "pacientes.jsx" que detalho tudo

const Menu=(onClick)=>{

    return (
    
    <button onClick={onClick}  className="menu-container">
        <Logo className="logo"/>
     
    </button>


    )
}
export default Menu;