import { useState } from "react";
import ".././style/App.css";

export const Contador = () => {
  const [contador, setContador] = useState(0);

  const Contar = () => {
    setContador(contador + 1);
  };

  const Quitar = () => {
    setContador(contador - 1);
  };

  const Restart = () => {
    setContador(0);
  };

  return (
    <>
      <h2 className="sub">Contador: </h2>
      <main className="main">
        <p className="main_parrafo">La cantidad de click es: {contador}</p>
        <button className="main_boton" onClick={Contar}>
          Aumentar
        </button>
        <button className="main_boton" onClick={Quitar}>
          Disminuir
        </button>
        <button className="main_boton" onClick={Restart}>
          Resetear
        </button>
      </main>
    </>
  );
};
