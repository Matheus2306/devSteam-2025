import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Header from "../components/Header";
import MarcadorCategoria from "../components/MarcadorCategoria";
import Footer from "../components/Footer";
import GameValor from "../components/GameValor";
import Caroucel from "../components/Caroucel";
import CarrinhoOffCanvas from "../components/CarrinhoOffCanvas";

const GameDescription = () => {
  const [carrinhoItem, setCarrinhoItem] = useState([]);

  const { state } = useLocation();
  const [CardItem, setCardItem] = useState(state?.jogo || {});
  const navigate = useNavigate();

  const voltar = () => {
    navigate(-1);
  };


  useEffect(() => {
    const salvaCarrinho = localStorage.getItem("devcarrinho");
    salvaCarrinho && setCarrinhoItem(JSON.parse(salvaCarrinho));
  }, []);
  if (carrinhoItem> 0){
    localStorage.setItem("devcarrinho", JSON.stringify(carrinhoItem));
  }


  // Garante que categoria seja um array
  const Arraycate = Array.isArray(CardItem.categoria)
    ? CardItem.categoria
    : [CardItem.categoria].filter((categoria) => categoria); // Filtra valores inválidos

  useEffect(() => {
    localStorage.setItem("PromoCard", JSON.stringify(CardItem));
  }, [CardItem]);

  useEffect(() => {
    const salvaCarrinho = localStorage.getItem("PromoCard");
    salvaCarrinho && setCardItem(JSON.parse(salvaCarrinho));
  }, []);

  const primeiraImagem = Array.isArray(CardItem.imagem)
    ? CardItem.imagem[0]
    : CardItem.imagem;

  console.log(carrinhoItem)

  const handleAddCarrinho = (produto) => {
    setCarrinhoItem((itemAnterior) => {
      const existe = itemAnterior.find((item) => item.id === produto.id);
      if (existe) {
        return itemAnterior.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...itemAnterior, { ...produto, quantidade: 1 }];
      }
    });
  };

  const handleRemoveCarrinho = (produto) => {
    setCarrinhoItem((itemAnterior) =>
      itemAnterior.filter((item) => item.id !== produto.id)
    );
  };

  const handleUpdateCarrinho = (produto, novaQuantidade) => {
    setCarrinhoItem((itemAnterior) =>
      itemAnterior.map((item) =>
        item.id === produto.id
          ? { ...item, quantidade: novaQuantidade > 0 ? novaQuantidade : 1 }
          : item
      )
    );
  };

  return (
    <div className="w-100 h-100">
      <Header contadorJogos={carrinhoItem.length} />
      <CarrinhoOffCanvas
        onRemoveCarrinho={handleRemoveCarrinho}
        onUpdateCarrinho={handleUpdateCarrinho}
        carrinhoItem={carrinhoItem}
      />
      <img
        src={primeiraImagem || "https://placehold.co/1920x1080"}
        className="z-0 vh-100 w-100 position-absolute opacity-75"
        alt={CardItem.titulo || ""}
      />
      <div
        className="z-1 gradientFundo h-100 w-100 position-absolute"
        alt=""
      ></div>
      <div className="container">
        <div className="row my-5 gap-5">
          <div className="my-3 z-2">
            <div className="d-flex align-items-center justify-content-between gap-2">
              <span className="fs-2 text-light">
                {CardItem.titulo || "Titulo do jogo"}
              </span>
              <span
                onClick={voltar}
                className="btn text-light fs-5 d-flex gap-2"
              >
                <i className="bi bi-box-arrow-left"></i>Voltar
              </span>
            </div>
            <hr />
          </div>
          <div className="col-md-6 d-flex flex-column z-2">
            {/* Carrossel de imagens */}
            <Caroucel imagem={CardItem.imagem} />
            <div className="my-3">
              <button className="btn text-light d-flex gap-2 buttons">
                <i className="bi bi-plus"></i>
                <span>Lista de Desejos</span>
              </button>
            </div>
            <GameValor handleAddCarrinho={handleAddCarrinho} jogo={CardItem} />
          </div>
          <div className="col-md d-flex flex-column z-2">
            <div>
              <img src={primeiraImagem} className="img-fluid w-100" alt="" />
            </div>
            <div className="text-light h5 mt-3">
              <p>{CardItem.descricao || "Descrição do jogo"}</p>
              <div className="text-secondary d-flex flex-column gap-2">
                <span>
                  Análises Recentes: {CardItem.analisesRecentes || "analise"}
                </span>
                <span>Todas as Análises: {CardItem.analises || "analise"}</span>
                <span>
                  Data de Lançamento: {CardItem.dataLancamento || "Data"}
                </span>
                <span>Desenvolvedor: {CardItem.desenvolvedor || "xxx"}</span>
                <span>Distribuidora: {CardItem.distribuidora || "xxx"}</span>
                <div className="d-flex flex-column gap-2">
                  <span>Marcadores populares para esse produto:</span>
                  <div className="d-flex flex-wrap gap-2">
                    {Arraycate.map((categoria, index) => (
                      <MarcadorCategoria key={index} categoria={categoria} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GameDescription;
