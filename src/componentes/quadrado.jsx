import React from "react";
import Agenda from "./agenda";
import Finanças from "./finanças";
import Paciente from "./paciente";
import Relatorio from "./relatorio";
import Usuario from   "./usuarios";
import Voltar from "./voltar";


const Quadrado=()=>{
    return <>
    
    <Paciente/>
    <Agenda/>
    <Relatorio/>
    <Finanças/>
    <Usuario/>
    <Voltar/>
    

</>
}
export default Quadrado;
