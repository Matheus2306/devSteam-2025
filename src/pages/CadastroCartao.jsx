import React, { useState } from "react";
import { useNavigate } from "react-router";
import HeaderLogs from "../components/HeaderLogs";
import Footer from "../components/Footer";

const CadastroCartao = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    numeroCartao: "",
    validadeCartao: "",
    cvvCartao: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, numeroCartao, validadeCartao, cvvCartao } = formData;

    if (!nome || nome.length < 3 || nome.length > 10) {
      alert("O nome no cartão deve ter entre 3 e 10 caracteres.");
      return;
    }

    if (!/^\d{16}$/.test(numeroCartao)) {
      alert("O número do cartão deve conter exatamente 16 números.");
      return;
    }

    if (!validadeCartao) {
      alert("Por favor, insira uma data de validade válida.");
      return;
    }

    const currentDate = new Date();
    const selectedDate = new Date(validadeCartao);

    if (selectedDate <= currentDate) {
      alert("A data de validade deve ser uma data futura.");
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
      <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1 py-4">
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

            <input
              className="form-control inputLog p-3 border-0 text-light w-100"
              type="text"
              name="nome"
              id="frmNome"
              placeholder="Nome no cartão"
              value={formData.nome}
              onChange={handleInputChange}
              maxLength="10"
            />

            <input
              className="form-control inputLog p-3 border-0 text-light w-100"
              type="text"
              name="numeroCartao"
              id="frmNumeroCartao"
              placeholder="Número do cartão"
              value={formData.numeroCartao}
              onChange={handleInputChange}
              maxLength="16"
            />

            <input
              className="form-control inputLog p-3 border-0 text-light w-100"
              type="date"
              name="validadeCartao"
              id="frmValidadeCartao"
              placeholder="Validade do cartão (MM/AA)"
              value={formData.validadeCartao}
              onChange={handleInputChange}
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

            <button type="submit" className="btn btn-primary mt-4">
              Cadastrar Cartão
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CadastroCartao;
