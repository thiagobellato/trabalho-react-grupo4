// import {useState} from 'react'
import "./PaginaInicial.css";
export default function Produto() {

// const[compra, setCompra] = useState("")

  return (
    <div>
        <header>
        <h1 id="banner">
            Brasilianas 
        </h1>
        </header>

        <div className='produto'>
            <img src="./src/img/geladeira2.png" alt="gela2" />
        <div >
        <h1>Geladeira Branca</h1>
        
        <p>Essa é a descrição do card, provavelmente terá um produto maneiro aqui com avaliação e frete</p>
        
        <button type="">Ver detalhes</button>
        </div>

        </div>


    </div>
  )
}
