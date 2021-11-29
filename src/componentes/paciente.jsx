import React from "react";
import "./paciente.css";
import {ReactComponent as Logo} from "./Pacientes.svg"; //Aqui eu chamo o icone svg em "Logo"...


//Escopo de como detalhar a função esse "Paciente" é o método que é chamado na ultima linha
const Paciente=(onClick)=>{
    //Tudo que tiver dentro dos () da função return é chamado quando o método "Paciente for executado"
    return (
    //Escopo de como declara um botão o evento "onClick" ainda não faz nada
    //Esse "paciente-container" é o nome da classe e é usado para linkar esse button com o seu respectivo css
    <button onClick={onClick}  className="paciente-container">
        <Logo className="logo"/> 
     
    </button>


    )
}
export default Paciente;