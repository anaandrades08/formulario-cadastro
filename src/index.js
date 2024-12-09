// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import CadastroResultado from "./components/CadastroResultado";
import { FormProvider } from "./FormContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/cadastro_resultado" element={<CadastroResultado />} />
        </Routes>
      </Router>
    </FormProvider>
  </React.StrictMode>
);
