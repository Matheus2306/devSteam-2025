import React from "react";
import { formatarMoeda } from "../utils/formatters";
import { useNavigate } from "react-router";

const HeroItens = ({
  imagem,
  titulo,
  precoComDesconto,
  className,
  desconto,
  precoOriginal,
  Categoria,
  descricao,
}) => {
  const navigate = useNavigate();
  const information = () => {
    return {
      titulo: titulo,
      imagem: imagem,
      desconto: desconto,
      preco: precoOriginal,
      descricao: descricao, // Substitua pela descrição real
      categoria: Categoria // Substitua pela categoria real
    };
  };
  const HandleGotoDescription = () => {
    navigate("/GameDescription", { state: { jogo: information() } });
  };

  return (
    <div className={className}>
      <div
        className="z-1 gradientFundo h-100 w-100 position-absolute"
        alt=""
      ></div>
      <img src={imagem} className="d-block img-fluid w-100" alt={titulo} />
      <div className="carousel-caption z-2 text-end fs-4 d-flex d-none d-md-block ">
        <h5 className="fs-3">{titulo}</h5>
        <div className="d-flex flex-column align-items-end gap-2">
          <div className="d-flex gap-2">
            <div className="d-flex align-items-center justify-content-center ">
              <span className="p-3 rounded bg-success">{desconto}%</span>
            </div>
            <div>
              <small className="ms-2 me-2 text-secondary text-decoration-line-through">
                {precoOriginal}
              </small>
              <p className="text-success">{formatarMoeda(precoComDesconto)}</p>
            </div>
          </div>
          <small
            role="button"
            className="fs-6 text-info text-decoration-underline"
            onClick={HandleGotoDescription}
          >
            Conheça o produto
          </small>
        </div>
      </div>
    </div>
  );
};

export default HeroItens;
