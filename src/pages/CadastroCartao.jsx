import React, { useState } from "react";
import { useNavigate } from "react-router";
import HeaderLogs from "../components/HeaderLogs";
import Footer from "../components/Footer";
import Cards from "react-credit-cards-2";
import { IMaskInput } from "react-imask";

const CadastroCartao = () => {
  const navigate = useNavigate();

  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });
  const [bandeira, setBandeira] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // const { nome, cpf, numeroCartao } = formData;

    // if (!nome || nome.length < 3 || nome.length > 10) {
    //   alert("O nome no cartão deve ter entre 3 e 10 caracteres.");
    //   return;
    // }

    // if (!/^\d{11}$/.test(cpf)) {
    //   alert("O CPF deve conter exatamente 11 números.");
    //   return;
    // }

    // if (!/^\d{16}$/.test(numeroCartao)) {
    //   alert("O número do cartão deve conter exatamente 16 dígitos.");
    //   return;
    // }

    // alert("Cartão cadastrado com sucesso!");
    // navigate("/");
  };

  return (
    <div className="d-flex flex-column min-vh-100 ">
      <HeaderLogs />

      <div className="container d-flex flex-row justify-content-center align-items-center flex-grow-1 py-4 gap-5">
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
              // value={formData.tipoCartao}
              // onChange={handleInputChange}
            >
              <option value="credito">Crédito</option>
              <option value="debito">Débito</option>
            </select>

            {/* Número do Cartão */}
            <IMaskInput
              mask="0000 0000 0000 0000"
              value={cardData.number}
              onAccept={(value) => setCardData({ ...cardData, number: value })}
              onFocus={() => setCardData({ ...cardData, focus: "number" })}
              name="number"
              placeholder="Número"
              className="form-control inputLog p-3 border-0 text-light w-100"
            />
            {/* Nome */}
            <IMaskInput
              mask={/^[A-Za-z\s]*$/}
              value={cardData.name}
              onAccept={(value) => setCardData({ ...cardData, name: value })}
              onFocus={() => setCardData({ ...cardData, focus: "name" })}
              name="name"
              placeholder="Nome"
              className="form-control inputLog p-3 border-0 text-light w-100 mt-3"
              maxLength={18}
            />
            {/* Validade */}
            <IMaskInput
              mask="00/00"
              blocks={{
                MM: { mask: IMask.MaskedRange, from: 1, to: 12 },
                YY: { mask: IMask.MaskedRange, from: 24, to: 99 },
              }}
              value={cardData.expiry}
              onAccept={(value) => setCardData({ ...cardData, expiry: value })}
              onFocus={() => setCardData({ ...cardData, focus: "expiry" })}
              name="expiry"
              placeholder="Validade"
              className="form-control inputLog p-3 border-0 text-light w-100 mt-3"
            />
            {/* CVC */}
            <IMaskInput
              mask="0000" // aceita 3 ou 4 dígitos
              value={cardData.cvc}
              onAccept={(value) => setCardData({ ...cardData, cvc: value })}
              onFocus={() => setCardData({ ...cardData, focus: "cvc" })}
              name="cvc"
              placeholder="CVC"
              className="form-control inputLog p-3 border-0 text-light w-100 mt-3"
            />
            <button type="submit" className="btn btn-success mt-4">
              Salvar Informações
            </button>
          </div>
        </form>
        <div className="" style={{ transform: "scale(1.4)", transformOrigin: "top Left" }}>
          <Cards
            number={cardData.number}
            name={cardData.name}
            expiry={cardData.expiry}
            cvc={cardData.cvc}
            focused={cardData.focus}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CadastroCartao;
