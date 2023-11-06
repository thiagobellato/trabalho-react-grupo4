import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import Header from "../../components/Header";
import ExibirLocalizacao from "./ExibirLocalizacao";

export default function Localizacao() {

  const [cep, setCep] = useState('');
  const [addressData, setAddressData] = useState(null);


  // Função que capta a mudança do INPUT
  const handleCep = (e) => {
    setCep(e.target.value)
  }

  const pegarEndereço = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setAddressData(data);
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error);
    }
  };

  useEffect(() => {
    pegarEndereço();
  }, []);

  console.log(addressData);

  return (
    <div>
      <Header/>
      <main style={{ flexDirection: 'column', padding: '100px' }}>
        <div>
          <label>Informe um CEP válido</label>
          {/* onChange = evento que capta a mudança */}
          <input onChange={handleCep} />
        </div>
        <div>
          <button onClick={pegarEndereço}>Pegar Endereço</button>
        </div>
        <div style={{ marginTop: '50px' }}>
          <ExibirLocalizacao  />
        </div>
      </main>
    </div>
  )

}
