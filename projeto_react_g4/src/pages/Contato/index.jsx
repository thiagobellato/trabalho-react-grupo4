// import React from 'react'
import { useRef, useState } from 'react'
import Header from '../../components/Header'
import './style.css'

export default function Contato() {

  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)
  console.log(isActive)

  const dropDownRef1 = useRef(null);
  const [isActive1, setIsActive1] = useState(false)
  const onClick1 = () => setIsActive1(!isActive1)
  console.log(isActive1)

  const dropDownRef2 = useRef(null);
  const [isActive2, setIsActive2] = useState(false)
  const onClick2 = () => setIsActive2(!isActive2)
  console.log(isActive2)

  const dropDownRef3 = useRef(null);
  const [isActive3, setIsActive3] = useState(false)
  const onClick3 = () => setIsActive3(!isActive3)
  console.log(isActive3)

  return (
    <div>
      <Header />
      <div className='contato'>
        <h1 className='titulo'>Contatos</h1>
      </div>

      <div id='sugestoes'>
        <h3 className='titulo'>Sugestões</h3>
        <form action="">
          <label id='nome' htmlFor="">Nome:</label>
          <input id='nomeCaixa' type="text" placeholder="Nome" />
          <label id='email' htmlFor="">Email:</label>
          <input id='emailCaixa' type="email" placeholder="Email" />
          <label id='mensagem'>Mensagem:</label>
          <textarea id='mensagemCaixa' placeholder="Digite sua mensagem"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className='contatos'>

        <div id='duvidas'>
          <h3 className='titulo'>Duvidas frequentes</h3>
          
          <button onClick={onClick} className='botao'>Eu posso devolver produtos com defeito?</button>
          <p ref={dropDownRef} className={`res ${isActive ? "active" : "inactive"}`} >Não. Você comprou por que quis. O golpe ta ai, cai quem quer!</p>
          
          <button onClick={onClick1} className='botao'>Quanto tempo tenho para apontar defeitos?</button>
          <p ref={dropDownRef1} className={`res ${isActive1 ? "active" : "inactive"}`}>Você tem todo o tempo do mundo para apontar defeitos, mas por favor não entre em contato conosco para relatá-los. Nos não queremos saber!!!</p>
          
          <button onClick={onClick2} className='botao'>Como eu reclamo de produtos defeituosos?</button>
          <p ref={dropDownRef2} className={`res ${isActive2 ? "active" : "inactive"}`}>Reclame com quem você quiser, menos conosco. O mundo já é um lugar muito estressante para ficarmos ouvindo suas reclamações.</p>
          
          <button onClick={onClick3} className='botao'>Como protegemos seu dinheiro?</button>
          <p ref={dropDownRef3} className={`res ${isActive3 ? "active" : "inactive"}`}>Nós deixamos ele bem seguro dentro do nosso bolso. Deixamos ele tão seguro que você nunca mais vai velo.</p>
        </div>

        <div id='fale'>
          <h3 className='titulo'>Fale conosco</h3>
          <p className='textoFale'>Telefone:(24)2225-8787</p>
          <p className='textoFale'>Celular:(24)99909-8999</p>
          <p className='textoFale'>Email:brasiliana@brasilianabr.com.br</p>
          <p className='textoFale'>Endereço:Rua dos Trabiques, nº 717, Petrópolis, RJ</p>
        </div>


      </div>
    </div>
  )
}

