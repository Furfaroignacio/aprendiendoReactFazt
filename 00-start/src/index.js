import React from "react";
import ReactDOM from "react-dom/client";
import { Saludo } from "./Saludo";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Saludo
      name="nacho"
      lastName="furfaro"
      addres={{ calle: "sanabria", altura: 1442 }}
      points={[3, 5, 6]}
      cash = {30000}
    />
  </>
);
