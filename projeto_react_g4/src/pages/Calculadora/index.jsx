import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import Header from "../../components/Header";

export default function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [sinal, setSinal] = useState("0");
  const [result, setResult] = useState("");

    useEffect(() => {
      if (resultado !== null) {
        setResult(`Resultado = ${resultado}`);
      }
    }, [resultado]);


  const inputNum = (e) =>{

     let input = e.target.value
      
     num1===0 ? setNum1(input) : setNum1(num1+input)

  }
  const inputNum2 = (e) => {
    let input = e.target.value
   
    num2 === 0 ? setNum2(input) : setNum2(num2 + input);
  };

  const inputSinal = (e) => {
    let input = e.target.value;

    setSinal(input);
  };
  const results = () => {
    sinal == "+"
      ? setResultado(parseInt(num1, 10) + parseInt(num2, 10))
      : sinal =='-' ? setResultado(parseInt(num1, 10) - parseInt(num2, 10)) : setResultado(parseInt(num1, 10) * parseInt(num2, 10));
  };

  const mostrarResultado = () => {

    results();
    setSinal("0");
    setNum1(0);
    setNum2(0);
  };

  var varr = inputNum2
  sinal ==='0' ? varr = inputNum : inputNum2

  return (
    <div className="all">
      <Header/>


      <div className="calculadora">
        <h1 id="title">A Calculadora.</h1>
        <div className="screen">
        <div style={{display: num1===0?'none':'block'}}>{num1}</div>
          <div style={{display: sinal==="0"?'none':'block'}}>{sinal}</div>
          <div style={{display: num2===0?'none':'block'}}>{num2}</div>
          </div>
        <div className="result">
          <div id="pp" style={{display: resultado===0?'none':'block'}}>{result}</div>
        </div>

        <div className="calc-btns">
          <button className="btnn" onClick={varr} value={"1"}>
            1
          </button>
          <button className="btnn" onClick={varr} value={"2"}>
            2
          </button>
          <button className="btnn" onClick={varr} value={"3"}>
            3
          </button>
          <button className="btnn" onClick={varr} value={"4"}>
            4
          </button>
          <button className="btnn" onClick={varr} value={"5"}>
            5
          </button>
          <button className="btnn" onClick={varr} value={"6"}>
            6
          </button>
          <button className="btnn" onClick={varr} value={"7"}>
            7
          </button>
          <button className="btnn" onClick={varr} value={"8"}>
            8
          </button>
          <button className="btnn" onClick={varr} value={"9"}>
            9
          </button>
          <button className="btnn" onClick={varr} value={"0"}>
            0
          </button>
          <button className="btnn" onClick={inputSinal} value={"+"}>
            +
          </button>
          <button className="btnn" onClick={inputSinal} value={"-"}>
            -
          </button>
          <button className="btnn" onClick={() => window.location.reload()}>
            AC
          </button>
          <button className="btnn" onClick={mostrarResultado}>
            =
          </button>
          <button className="btnn" onClick={inputSinal} value={"x"}>
            x
          </button>
        </div>
        <p>&copy;Paulo G. Todos os direitos
           reservados</p>
      </div>
    </div>
  );
}
