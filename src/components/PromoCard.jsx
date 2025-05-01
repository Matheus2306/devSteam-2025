import React from "react";
import { useNavigate } from "react-router";

const PromoCard = (props) => {
  const precoComDesconto = props.preco - (props.preco * props.desconto) / 100;
  const navigate = useNavigate();

  // Seleciona a primeira imagem se for um array, ou usa o valor diretamente
  const primeiraImagem = Array.isArray(props.imagem) ? props.imagem[0] : props.imagem;

  const information = () => {
    return {
      id: props.id,
      titulo: props.titulo,
      imagem: props.imagem, // Passa o array completo para a próxima página
      preco: props.preco,
      desconto: props.desconto,
      descricao: props.descricao,
      categoria: props.categoria,
    };
  };

  const GoToDescription = () => {
    navigate("/GameDescription", { state: { jogo: information() } });
  };

  return (
    <div
      id="PromoCard"
      className="promoCard card border-0 overflow-hidden"
      onClick={GoToDescription}
    >
      <img
        className="card-img-top object-fit-cover"
        src={primeiraImagem} // Exibe apenas a primeira imagem
        height={300}
        alt={props.titulo || "Imagem do jogo"}
      />
      <div className="card-body d-flex flex-column gap-2">
        <h5
          data-bs-toggle="tooltip"
          title={props.titulo}
          className="card-title text-uppercase text-truncate mw-100 h-100 fw-bold text-light text-nowrap"
        >
          {props.titulo}
        </h5>
        <div className="m-0 row h-100 align-items-center justify-content-center">
          <span className="desconto col-4 h-100 fw-bold h5 m-0 d-flex align-items-center">
            -{props.desconto}%
          </span>
          <div className="col h-100 card-text bg-dark">
            <p className="m-0 p-0 text-end text-secondary text-decoration-line-through small">
              <small>{props.precoFormatado}</small>
            </p>
            <p className="corValor m-0 p-0 fs-4 text-end fw-bolder">
              {props.formatarMoeda(precoComDesconto)}
            </p>
          </div>
        </div>
        <button
          id="addCarrinho"
          className="btn btn-success desconto text-light w-100 border-0"
          onClick={props.onAddCarrinho}
        >
          <i className="bi bi-cart-plus me-2"></i>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default PromoCard;
