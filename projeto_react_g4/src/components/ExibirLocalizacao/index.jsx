import React from "react";
import "./style.css";

export default function ExibirLocalizacao({parametro}) {
 console.log(parametro);
  return (
    <div>
      <p className="texto">
      {parametro?.logradouro}
      <br />
      {parametro?.bairro}
      <br />
      {parametro?.localidade}
      <br />
      {parametro?.uf}
      </p>
    </div>
  )

}