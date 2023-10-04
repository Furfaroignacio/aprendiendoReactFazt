import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

function Conter() {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("render");
  }, [counter]);

  return (
    <>
      <input
        onChange={(e) => {
          setMensaje(e.target.value);
        }}
      />
      <button
        onClick={() => {
          alert("el mensaje es " + mensaje);
        }}
      >
        Save
      </button>
      <hr />
      <h1>Counter : {counter}</h1>
      <button onClick={() => {
        setCounter(counter + 1)
      }}>
        Incrementar
      </button>
    </>
  );
}

root.render(
  <>
    <Conter />
  </>
);
