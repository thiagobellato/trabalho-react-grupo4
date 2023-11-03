import React from "react";
import "./style.css";
import HeaderMain from "../../components/HeaderMain/index.jsx";
import { Link } from "react-router-dom";
import Header from "../../components/Header/index.jsx";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>Consumindo API</h2>
            </header>
            <div className="line"></div>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan
              disputationi eu sit. Vide electram sadipscing et per. Per aumento
              de cachacis, eu reclamis. Paisis, filhis, espiritis santis.
              Cevadis im ampola pa arma uma pindureta.
            </p>
            <div className="btns">
              <div className="btn-edit">
                <Link to = '/contato'>
                  <button>Contato</button>
                </Link>
              </div>
              <div className="btn-more">
                <Link to ='/sobre'>
                  <button>Ler Mais</button>
                </Link>
              </div>
              
              <div className="btn-delete">
              <Link to ='/produto'>
                  <button>Produto</button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
