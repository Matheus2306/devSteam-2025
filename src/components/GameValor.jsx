import React from "react";
import { formatarMoeda } from "../utils/formatters";

const GameValor = (props) => {
  // Calcula o preço com desconto, se houver
  const precoComDesconto = props.jogo.desconto
    ? props.jogo.preco - (props.jogo.preco * props.jogo.desconto) / 100
    : props.jogo.preco;

  return (
    <div className="w-100 position-relative buy p-3 rounded-1 mb-4">
      <p>{props.jogo.titulo || "Título do jogo"}</p>
      <div className="d-flex justify-content-end align-items-end">
        <div className="rounded-1 bg-black p-2 top-50 position-absolute d-flex gap-2 align-items-center">
          {/* Exibe o preço original riscado, se houver desconto */}
          {props.jogo.desconto > 0 && (
            <div className="d-flex align-items-center gap-2">
              <span className="desconto p-2 rounded-1 fs-4">
                {props.jogo.desconto}%
              </span>
              <span className="text-decoration-line-through text-secondary small">
                {formatarMoeda(props.jogo.preco)}
              </span>
            </div>
          )}
          {/* Exibe o preço final formatado */}
          <span className="h6 m-0 text-light">
            {formatarMoeda(precoComDesconto)}
          </span>
          <span
            role="button"
            className="p-2 bg_gradient rounded-1 text-light d-flex gap-1"
            onClick={() => props.handleAddCarrinho(props.jogo)}
            data-bs-toggle="offcanvas"
            data-bs-target="#carrinhoOffCanvas"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            title="Adicionar ao carrinho"
          >
            <i className="bi bi-plus"></i>
            Carrinho
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameValor;
