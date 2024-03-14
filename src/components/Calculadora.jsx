import { useState } from "react";
import ".././style/App.css";

export const Calculadora = () => {
  const [inputA, setinputA] = useState("");
  const [inputB, setinputB] = useState("");
  const [inputC, setinputC] = useState("");
  const [signo, setSigno] = useState("");
  const [signoEstado, estadoSigno] = useState(false);

  const CapturarA = (event) => {
    if (signoEstado === true) {
      setinputB(inputB + event.target.value);
      console.log(inputB + event.target.value);
    } else {
      setinputA(inputA + event.target.value);
      console.log(inputA + event.target.value);
    }
  };

  const Signo = (event) => {
    setSigno(event.target.value);
    console.log(event.target.value);
    estadoSigno(true);
  };

  const Igual = () => {
    if (signo === "+") {
      setinputC(parseInt(inputA) + parseInt(inputB));
    } else if (signo === "-") {
      setinputC(parseInt(inputA) - parseInt(inputB));
    } else if (signo === "*") {
      setinputC(parseInt(inputA) * parseInt(inputB));
    } else if (signo === "/") {
      setinputC(parseFloat(inputA) / parseFloat(inputB));
    }
    setinputA("");
    setinputB("");
    setSigno("");
  };
  const Resetear = () => {
    setinputA("");
    setinputB("");
    setinputC("");
    setSigno("");
    estadoSigno(false);
  };

  return (
    <>
      <h2 className="sub">Calculadora: </h2>
      <main className="main">
        <button className="main_boton_num" value="1" onClick={CapturarA}>
          1
        </button>
        <button className="main_boton_num" value="2" onClick={CapturarA}>
          2
        </button>
        <button className="main_boton_num" value="3" onClick={CapturarA}>
          3
        </button>
        <button className="main_boton_num" value="4" onClick={CapturarA}>
          4
        </button>
        <button className="main_boton_num" value="5" onClick={CapturarA}>
          5
        </button>
        <button className="main_boton_num" value="6" onClick={CapturarA}>
          6
        </button>
        <button className="main_boton_num" value="7" onClick={CapturarA}>
          7
        </button>
        <button className="main_boton_num" value="8" onClick={CapturarA}>
          8
        </button>
        <button className="main_boton_num" value="9" onClick={CapturarA}>
          9
        </button>
        <button className="main_boton_num" value="0" onClick={CapturarA}>
          0
        </button>
        <button className="main_boton" onClick={Igual}>
          Total
        </button>
        <button className="main_boton" value="+" onClick={Signo}>
          +
        </button>
        <button className="main_boton" value="*" onClick={Signo}>
          *
        </button>
        <button className="main_boton" value="/" onClick={Signo}>
          /
        </button>
        <button className="main_boton" value="-" onClick={Signo}>
          -
        </button>
        <button className="main_boton" value="-" onClick={Resetear}>
          Restart
        </button>
        <div className="main_resultado">
          {inputA} {signo} {inputB} {inputC}
        </div>
      </main>
    </>
  );
};
