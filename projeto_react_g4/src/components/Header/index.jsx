import React from "react";
import { Link } from "react-router-dom"
import './style.css'

export default function Header() {
  return (
    <header>
      {/* <h2>Empresa ABC</h2> */}
      <div className="menu">

        <div id="tituloHeader">

          <img src="../../../src/assets/Brasilianas.svg" alt="logo" />
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
            <li>
              <Link to={'/localizacao'}><button className="button">Localização</button></Link>
            </li>

          </ul>





        </nav>
      </div>
    </header>
  );
}
