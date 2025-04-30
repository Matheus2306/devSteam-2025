import React from "react";

const GameCard = (props) => {
  return (
    <div
      id="GameCard"
      className="gameCard card border-0 overflow-hidden gradient-card"
    >
      <img
        className="card-img-top object-fit-cover"
        src={props.imagem}
        height={200}
        alt={props.titulo}
      />
      <div id="cards" className="card-body d-flex flex-column gap-2">
        <h5
          data-bs-toggle="tooltip"
          title={props.titulo}
          className="card-title text-uppercase text-truncate mw-100 h-100 fw-bold text-light text-nowrap"
        >
          {props.titulo}
        </h5>
        <p className="text-light card-text text-secondary small">
          {props.descricao}
        </p>
        <p className="text-light card-text text-secondary small">
          <strong>Categoria:</strong> {props.categoria}
        </p>
        <div className={`price-card ${props.preco === 0.0 ? "gratis" : ""}`}>
          {props.preco === 0.0 ? "GRATUITO PARA JOGAR" : <span className="corValor">R$ {props.preco.toFixed(2)}</span>}
        </div>
        <button className="button">Adicionar ao Carrinho</button>
        <button className="button">Ver Detalhes</button>
      </div>
    </div>
  );
};

export default GameCard;
