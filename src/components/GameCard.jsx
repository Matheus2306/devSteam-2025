import React from "react";

const GameCard = ({ titulo, preco, imagem, categoria, descricao, onAddCarrinho }) => {
  const handleAddToCart = () => {
    if (onAddCarrinho) {
      onAddCarrinho({
        titulo,
        preco,
        imagem,
      });
    }
  };

  return (
    <div
      id="GameCard"
      className="gameCard card border-0 overflow-hidden gradient-card"
    >
      <img
        className="card-img-top object-fit-cover"
        src={imagem}
        height={200}
        alt={titulo}
      />
      <div id="cards" className="card-body d-flex flex-column gap-2">
        <h5
          data-bs-toggle="tooltip"
          title={titulo}
          className="card-title text-uppercase text-truncate mw-100 h-100 fw-bold text-light text-nowrap"
        >
          {titulo}
        </h5>
        <p className="text-light card-text text-secondary small">
          {descricao}
        </p>
        <p className="text-light card-text text-secondary small">
          <strong>Categoria:</strong> {categoria}
        </p>
        <div className={`price-card ${preco === 0.0 ? "gratis" : ""}`}>
          {preco === 0.0 ? (
            "GRATUITO PARA JOGAR"
          ) : (
            <span className="corValor">R$ {(preco ?? 0).toFixed(2)}</span>
          )}
        </div>
        <button
          id="addCarrinho"
          className="btn btn-success desconto text-light w-100 border-0"
          onClick={handleAddToCart}
        >
          <i className="bi bi-cart-plus me-2"></i>
          Adicionar ao carrinho
        </button>
        <button className="button">Ver Detalhes</button>
      </div>
    </div>
  );
};

export default GameCard;
