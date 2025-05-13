import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

import CarrinhoOffCanvas from "../components/CarrinhoOffCanvas";
import TituloGameDescr from "../components/TituloGameDescr";
import SideleftDescrInform from "../components/SideleftDescrInform";
import SideRightDescr from "../components/SideRightDescr";

const GameDescription = () => {
  const { state } = useLocation();
  const [CardItem, setCardItem] = useState(state?.jogo || {});
  const navigate = useNavigate();

  const voltar = () => {
    navigate(-1);
  };

  const [carrinhoItem, setCarrinhoItem] = useState(() => {
    // Recupera o estado inicial do carrinho do localStorage ao carregar o componente
    const salvaCarrinho = localStorage.getItem("devcarrinho");
    return salvaCarrinho ? JSON.parse(salvaCarrinho) : [];
  });

  // Função para sincronizar o estado do carrinho com o localStorage
  const sincronizarCarrinhoComLocalStorage = (novoCarrinho) => {
    localStorage.setItem("devcarrinho", JSON.stringify(novoCarrinho));
  };

  // Função para adicionar um produto ao carrinho
  const handleAddCarrinho = (produto) => {
    setCarrinhoItem((itemAnterior) => {
      const existe = itemAnterior.find((item) => item.id === produto.id);
      const novoCarrinho = existe
        ? itemAnterior.map((item) =>
            item.id === produto.id
              ? { ...item, quantidade: item.quantidade + 1 }
              : item
          )
        : [...itemAnterior, { ...produto, quantidade: 1 }];
      sincronizarCarrinhoComLocalStorage(novoCarrinho); // Atualiza o localStorage
      return novoCarrinho;
    });
  };

  // Função para remover um produto do carrinho
  const handleRemoveCarrinho = (produto) => {
    setCarrinhoItem((itemAnterior) => {
      const novoCarrinho = itemAnterior.filter((item) => item.id !== produto.id);
      sincronizarCarrinhoComLocalStorage(novoCarrinho); // Atualiza o localStorage
      return novoCarrinho;
    });
  };

  // Função para atualizar a quantidade de um produto no carrinho
  const handleUpdateCarrinho = (produto, novaQuantidade) => {
    setCarrinhoItem((itemAnterior) => {
      const novoCarrinho = itemAnterior.map((item) =>
        item.id === produto.id
          ? { ...item, quantidade: novaQuantidade > 0 ? novaQuantidade : 1 }
          : item
      );
      sincronizarCarrinhoComLocalStorage(novoCarrinho); // Atualiza o localStorage
      return novoCarrinho;
    });
  };

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
          <TituloGameDescr titulo={CardItem.titulo} voltar={voltar} />
          <SideleftDescrInform
            imagem={CardItem.imagem}
            handleAddCarrinho={handleAddCarrinho}
            jogo={CardItem}
          />
          <SideRightDescr
            primeiraImagem={primeiraImagem}
            Arraycate={Arraycate}
            descricao={CardItem.descricao}
            analisesRecentes={CardItem.analisesRecentes}
            analises={CardItem.analises}
            dataLancamento={CardItem.dataLancamento}
            desenvolvedor={CardItem.desenvolvedor}
            distribuidora={CardItem.distribuidora}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GameDescription;
