import React from "react";

const Cartoes = ({ numeroCartao, bandeira }) => {
  const formatCardNumber = (number) => {
    return number.replace(/(\d{4})(?=\d)/g, "$1 ").trim(); // Formata em blocos de 4 dígitos
  };

  const getCardStyle = (bandeira) => {
    switch (bandeira.toLowerCase()) {
      case "visa":
        return { backgroundColor: "#1a1f71", color: "#fff" };
      case "mastercard":
        return { backgroundColor: "#eb001b", color: "#fff" };
      case "amex":
        return { backgroundColor: "#4d4f53", color: "#fff" };
      default:
        return { backgroundColor: "#ccc", color: "#000" };
    }
  };

  return (
    <div className="cartoes-container">
      <div
        id="cartao1"
        className="card"
        style={getCardStyle(bandeira || "Desconhecida")}
      >
        <h5 className="cartao-nome">Cartão {bandeira || "Desconhecida"}</h5>
        <p className="cartao-numero">
          {numeroCartao ? formatCardNumber(numeroCartao) : "**** **** **** ****"}
        </p>
      </div>
      <span className="text-danger btn">Remover Cartão</span>
    </div>
  );
};

export default Cartoes;
