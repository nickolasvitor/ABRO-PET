import React from "react";
import "./App.css";
import {BrowserRouter as Router} from 'react-router-dom'
import Quadrado from "./componentes/quadrado";
import Menu from "./componentes/menu";


/*Até a linha 12 é um script para pegar a data atual*/ 
var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
var dataAtual = dia + '/' + mes + '/' + ano;

//dessa linha em diante somente vai ter linha do sobre o app "camada por camada"


const App = () => {
  
  

  return (
    <> 
      <div className='container'>
          <Quadrado />
          <div className = "head-container">
          <Menu/>
          </div>
          <div className = "footer-container">
            <p className="paragrafo">
            Usuário: Administrador;<br/> 
            Data:{dataAtual}</p>
          </div>


      </div>
    </>
  )
}

export default App;
