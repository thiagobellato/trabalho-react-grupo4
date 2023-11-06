import React, { useEffect, useState } from 'react'
import './style.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'


export default function More() {

  const[more, setMore] = useState({})
  const { id } = useParams();
  
  useEffect(()=>{

        
    axios.get(`https://6542e1c401b5e279de1fb01e.mockapi.io/produtos/${id}`)
    .then(response=> {
      setMore(response.data);
    }).catch(()=>{
      console.log("Deu errado !");
    })
},[]);

  return (
    <div>
      
      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>{more.titulo}</h2>
            </header>
            <div className="line"></div>
            <p>{more.conteudo}</p>
            {/* <p>{more.dataFabricacao}</p> */}
            <p>{more.qntdEstoque}</p>
            <p>{more.valorUnitario}</p>
          </div>
        </div>
      </main>
    </div>
  )
}
