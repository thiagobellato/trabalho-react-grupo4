import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

export default function ExibirLocalizacao({data}) {
console.log("Sou Filho, mas estou recebendo dados do meu Pai ",data);
  return (
    <div>
      <p>{data?.logradouro}</p>
      <p>{data?.bairro}</p>
      <p>{data?.complemento}</p>
      <p>{data?.localidade}</p>
      <p>{data?.uf}</p>
      <p></p>
    </div>
  )

}
