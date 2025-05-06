import React from "react";

const Cartoes = ({ numeroCartao }) => {
  const formatCardNumber = (number) => {
    return number.replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  return (
    <div className="cartoes-container">
      <div id="cartao1" className="card">
        <h5 className="cartao-nome">Cartão X</h5>
        <p className="cartao-tipo">Tipo X</p>
        <p className="cartao-numero">
          {numeroCartao ? formatCardNumber(numeroCartao) : "**** **** **** ****"}
        </p>
      </div>
      <span className="text-danger btn">Remover Cartão</span>
    </div>
  );
};

export default Cartoes;
