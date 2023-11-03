// import {useState} from 'react'
import Header from "../../components/Header";
import "./style.css";
export default function Produto() {

// const[compra, setCompra] = useState("")

  return (
    <div>
      
        
        
            <Header/>
         
        

        <div className='produto'>
            <img src="../../src/assets/geladeira2.png" alt="gela2" />
        <div >
        <h1>Geladeira Branca</h1>
        
        <p>Essa é a descrição do card, provavelmente terá um produto maneiro aqui com avaliação e frete</p>
        
        <button type="">Ver detalhes</button>
        </div>

        </div>


    </div>
  )
}
