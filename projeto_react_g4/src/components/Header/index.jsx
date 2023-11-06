import React from "react";
import {Link} from "react-router-dom"
import './style.css'
import Player1 from "../Player";

export default function Header() {
  return (
    <header>
      {/* <h2>Empresa ABC</h2> */}
      <div className="menu">
        
        <Player1/>
            <div id="tituloHeader">
              
              <img src="../../../src/assets/Brasilianas.svg" alt="logo" className="img-logo" />
                </div>
            <nav>
              <ul>
                
                <li>
                  <Link to={'/'}><button className="button">Home</button></Link></li>
                  
                <li> 
            <Link to={'/empresa'}><button className="button">Empresa</button></Link>
                </li>
                <li>
            <Link to={'/produto'}><button className="button">Produtos</button></Link>
                </li>
                <li>
            <Link to={'/sobre'}><button className="button"> Sobre</button></Link>
                </li>
                <li>
            <Link to={'/contato'}><button className="button">Contato</button></Link>
            </li>
                <li>
            <Link to={'/calc'}><button className="button">Calculadora</button></Link>
            </li>
              </ul>

            </nav>
      </div>
    </header>
  );
}
