// src/FormContext.js
import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    cpf: "",
    email: "",
    endereco: "",
    bairro: "",
    cidade: "",
    uf: "",
    cep: "",
    dataNascimento: "",
    celular: "",
    login: "",
    senha: "",
    estadoCivil: "Solteiro",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
