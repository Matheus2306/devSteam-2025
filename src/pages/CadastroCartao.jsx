import React, { useState } from "react";
import { useNavigate } from "react-router";
import HeaderLogs from "../components/HeaderLogs";
import Footer from "../components/Footer";
import Cartoes from "../components/Cartoes";

const CadastroCartao = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    numeroCartao: "",
    validade: "",
    cvvCartao: "",
    tipoCartao: "credito",
    cpf: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Ensure only numeric input for numeroCartao and cpf
    if ((name === "numeroCartao" || name === "cpf") && !/^\d*$/.test(value)) {
      return;
    }

    // Ensure only letters for nome
    if (name === "nome" && !/^[a-zA-Z\s]*$/.test(value)) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, numeroCartao, validade, cvvCartao, cpf } = formData;

    if (!nome || nome.length < 3 || nome.length > 10) {
      alert("O nome no cartão deve ter entre 3 e 10 caracteres.");
      return;
    }

    if (!/^\d{16}$/.test(numeroCartao)) {
      alert("O número do cartão deve conter exatamente 16 números.");
      return;
    }

    if (!/^\d{11}$/.test(cpf)) {
      alert("O CPF deve conter exatamente 11 números.");
      return;
    }

    const [day, month, year] = validade.split("/").map(Number);
    const currentDate = new Date();
    const cardDate = new Date(`20${year}`, month - 1, day);

    if (cardDate < currentDate) {
      alert("A data inserida já passou.");
      return;
    }

    const oneMonthAhead = new Date();
    oneMonthAhead.setMonth(currentDate.getMonth() + 1);

    if (cardDate > oneMonthAhead) {
      alert("O cartão só pode ser cadastrado com um mês de antecedência.");
      return;
    }
    if (!/^\d{3}$/.test(cvvCartao)) {
      alert("O código de segurança (CVV) deve conter exatamente 3 números.");
      return;
    }

    navigate("/");
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <HeaderLogs />
      <div className="container d-flex flex-row justify-content align-items-start flex-grow-1 py-4">
        <form
          onSubmit={handleSubmit}
          className="position-relative rounded-1 p-4 d-flex flex-column justify-content-center align-items-center w-100"
          style={{ maxWidth: "500px", minHeight: "450px" }}
        >
          <div className="formsBg rounded-2 z-1 position-absolute w-100 h-100"></div>
          <img
            className="z-0 position-absolute img-fluid opacity-50 w-100 h-100 object-fit-cover"
            src="src/img/Ratzomne_1.png"
            alt=""
          />
          <div className="z-2 d-flex flex-column w-100 gap-3 justify-content-center align-items-center">
            <h3 className="text-uppercase text-center">Cadastro de Cartão</h3>

            <select
              className="form-select p-3 border-0 text-dark w-100"
              name="tipoCartao"
              value={formData.tipoCartao}
              onChange={handleInputChange}
            >
              <option value="credito">Crédito</option>
              <option value="debito">Débito</option>
            </select>

            <input
              className="form-control inputLog p-3 border-0 text-light w-100"
              type="text"
              name="numeroCartao"
              id="frmNumeroCartao"
              placeholder="Nº do Cartão"
              value={formData.numeroCartao}
              onChange={handleInputChange}
              maxLength="16"
            />

            <input
              className="form-control inputLog p-3 border-0 text-light w-100"
              type="text"
              name="nome"
              id="frmNome"
              placeholder="Nome do Titular"
              value={formData.nome}
              onChange={handleInputChange}
              maxLength="10"
            />

            <input
              className="form-control inputLog p-3 border-0 text-light w-100"
              type="text"
              name="cpf"
              id="frmCPF"
              placeholder="CPF do Titular"
              value={formData.cpf}
              onChange={handleInputChange}
              maxLength="11"
            />

            <input
              className="form-control inputLog p-3 border-0 text-light w-100"
              type="text"
              name="validade"
              id="frmValidade"
              placeholder="Data de Vencimento do Cartão (DD/MM/AA)"
              value={formData.validade}
              onChange={handleInputChange}
              maxLength="10"
            />

            <input
              className="form-control inputLog p-3 border-0 text-light w-100"
              type="text"
              name="cvvCartao"
              id="frmCVVCartao"
              placeholder="Código de Verificação (CVV)"
              value={formData.cvvCartao}
              onChange={handleInputChange}
              maxLength="3"
            />

            <button type="submit" className="btn btn-success mt-4">
              Salvar Informações
            </button>
          </div>
        </form>
        <Cartoes numeroCartao={formData.numeroCartao} />
      </div>
      <Footer />
    </div>
  );
};

export default CadastroCartao;
