import React from "react";
import { formatarMoeda } from "../utils/formatters";

const HeroItens = ({
  imagem,
  titulo,
  precoComDesconto,
  className,
  desconto,
}) => {
  return (
    <div className={className}>
      <div
        className="z-1 gradientFundo h-100 w-100 position-absolute"
        alt=""
      ></div>
      <img src={imagem} className="d-block img-fluid w-100" alt={titulo} />
      <div className="carousel-caption z-2 text-end fs-4 d-none d-md-block ">
        <h5>{titulo}</h5>
        <div className="d-flex justify-content-end">
          <span>{desconto}</span>
          <p>{formatarMoeda(precoComDesconto)}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroItens;
