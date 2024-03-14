import React from "react";
import ReactDOM from "react-dom/client";
import { Calculadora } from "./components/Calculadora.jsx";
import { Contador } from "./components/Contador.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Contador />
    <Calculadora />
  </React.StrictMode>
);
