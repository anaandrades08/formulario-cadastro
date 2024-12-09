// src/components/CadastroResultado.js
import React, { useContext } from "react";
import { FormContext } from "../FormContext";

function CadastroResultado() {
  const { formData } = useContext(FormContext);

  return (
    <div>
      <h1>Cadastro Realizado com Sucesso!</h1>
      <p>
        <strong>Nome Completo:</strong> {formData.nomeCompleto}
      </p>
      <p>
        <strong>CPF:</strong> {formData.cpf}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>Endereço:</strong> {formData.endereco}
      </p>
      <p>
        <strong>Bairro:</strong> {formData.bairro}
      </p>
      <p>
        <strong>Cidade:</strong> {formData.cidade}
      </p>
      <p>
        <strong>UF:</strong> {formData.uf}
      </p>
      <p>
        <strong>CEP:</strong> {formData.cep}
      </p>
      <p>
        <strong>Data de Nascimento:</strong> {formData.dataNascimento}
      </p>
      <p>
        <strong>Celular:</strong> {formData.celular}
      </p>
      <p>
        <strong>Login:</strong> {formData.login}
      </p>
      <p>
        <strong>Estado Civil:</strong> {formData.estadoCivil}
      </p>
    </div>
  );
}

export default CadastroResultado;
