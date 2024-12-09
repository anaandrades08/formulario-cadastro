// src/components/Form.js
import React, { useContext } from "react";
import { FormContext } from "../FormContext";
import "../CSS/Form.css"; // Importando o CSS

function Form() {
  const { formData, setFormData } = useContext(FormContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do Formulário:", formData);
    // Redirecionar para a página de resultado
    window.location.href = "/cadastro_resultado";
  };

  const handleReset = () => {
    setFormData({
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
      estadoCivil: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Dados Pessoais</legend>
        <label htmlFor="nomeCompleto">Nome Completo:</label>
        <input
          type="text"
          id="nomeCompleto"
          name="nomeCompleto"
          value={formData.nomeCompleto}
          onChange={handleChange}
          required
        />

        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          required
        />

        <label htmlFor="dataNascimento">Data de Nascimento:</label>
        <input
          type="date"
          id="dataNascimento"
          name="dataNascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
          required
        />

        <label htmlFor="estadoCivil">Estado Civil:</label>
        <select
          id="estadoCivil"
          name="estadoCivil"
          value={formData.estadoCivil}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="Solteiro">Solteiro</option>
          <option value="Casado">Casado</option>
          <option value="Viuvo">Viúvo</option>
          <option value="Divorciado">Divorciado</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Dados de Contato</legend>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="endereco">Endereço:</label>
        <input
          type="text"
          id="endereco"
          name="endereco"
          value={formData.endereco}
          onChange={handleChange}
          required
        />

        <label htmlFor="bairro">Bairro:</label>
        <input
          type="text"
          id="bairro"
          name="bairro"
          value={formData.bairro}
          onChange={handleChange}
          required
        />

        <label htmlFor="cidade">Cidade:</label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          value={formData.cidade}
          onChange={handleChange}
          required
        />

        <label htmlFor="uf">UF:</label>
        <select
          id="uf"
          name="uf"
          value={formData.uf}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="AC">AC</option>
          <option value="AL">AL</option>
          <option value="AP">AP</option>
          <option value="AM">AM</option>
          <option value="BA">BA</option>
          <option value="CE">CE</option>
          <option value="DF">DF</option>
          <option value="ES">ES</option>
          <option value="GO">GO</option>
          <option value="MA">MA</option>
          <option value="MT">MT</option>
          <option value="MS">MS</option>
          <option value="MG">MG</option>
          <option value="PA">PA</option>
          <option value="PB">PB</option>
          <option value="PR">PR</option>
          <option value="PE">PE</option>
          <option value="PI">PI</option>
          <option value="RJ">RJ</option>
          <option value="RN">RN</option>
          <option value="RS">RS</option>
          <option value="RO">RO</option>
          <option value="RR">RR</option>
          <option value="SC">SC</option>
          <option value="SP">SP</option>
          <option value="SE">SE</option>
          <option value="TO">TO</option>
        </select>

        <label htmlFor="cep">CEP:</label>
        <input
          type="text"
          id="cep"
          name="cep"
          value={formData.cep}
          onChange={handleChange}
          required
        />

        <label htmlFor="celular">Celular:</label>
        <input
          type="text"
          id="celular"
          name="celular"
          value={formData.celular}
          onChange={handleChange}
          required
        />
      </fieldset>

      <fieldset>
        <legend>Dados de Cadastro</legend>
        <label htmlFor="login">Login:</label>
        <input
          type="text"
          id="login"
          name="login"
          value={formData.login}
          onChange={handleChange}
          required
        />

        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          required
        />
      </fieldset>
      <fieldset name="form_interesses">
        <legend>INTERESSES</legend>
        <input
          type="checkbox"
          id="tecnologia"
          name="interesses"
          defaultValue="tecnologia"
        />
        <label htmlFor="tecnologia">TECNOLOGIA</label>
        <input
          type="checkbox"
          id="esportes"
          name="interesses"
          defaultValue="esportes"
        />
        <label htmlFor="esportes">ESPORTES</label>
        <input
          type="checkbox"
          id="automoveis"
          name="interesses"
          defaultValue="automoveis"
        />
        <label htmlFor="automoveis">AUTOMÓVEIS</label>
        <input
          type="checkbox"
          id="culinaria"
          name="interesses"
          defaultValue="culinaria"
        />
        <label htmlFor="culinaria">CULINÁRIA</label>
        <input
          type="checkbox"
          id="politica"
          name="interesses"
          defaultValue="politica"
        />
        <label htmlFor="politica">POLÍTICA</label>
        <input
          type="checkbox"
          id="policial"
          name="interesses"
          defaultValue="policial"
        />
        <label htmlFor="policial">POLICIAL</label>
        <input
          type="checkbox"
          id="tempo"
          name="interesses"
          defaultValue="tempo"
        />
        <label htmlFor="tempo">TEMPO</label>
        <input
          type="checkbox"
          id="cultura"
          name="interesses"
          defaultValue="cultura"
        />
        <label htmlFor="cultura">CULTURA</label>
        <input
          type="checkbox"
          id="economia"
          name="interesses"
          defaultValue="economia"
        />
        <label htmlFor="economia">ECONOMIA</label>
        <input
          type="checkbox"
          id="jogos"
          name="interesses"
          defaultValue="jogos"
        />
        <label htmlFor="jogos">JOGOS</label>
        <input
          type="checkbox"
          id="educacao"
          name="interesses"
          defaultValue="educacao"
        />
        <label htmlFor="educacao">EDUCAÇÃO</label>
        <input
          type="checkbox"
          id="viagem"
          name="interesses"
          defaultValue="viagem"
        />
        <label htmlFor="viagem">VIAGEM</label>
        <input
          type="checkbox"
          id="empregos"
          name="interesses"
          defaultValue="empregos"
        />
        <label htmlFor="empregos">EMPREGOS</label>
        <input
          type="checkbox"
          id="tempo"
          name="moda-estilo"
          defaultValue="moda-estilo"
        />
        <label htmlFor="moda-estilo">MODA E ESTILO</label>
      </fieldset>

      <button type="submit">Cadastrar</button>
      <button type="button" onClick={handleReset}>
        Limpar
      </button>
    </form>
  );
}

export default Form;
