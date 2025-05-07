import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Promotion from "./components/Promotion";
import CarrinhoOffCanvas from "./components/CarrinhoOffCanvas";
import OutrosJogos from "./components/OutrosJogos";
import Footer from "./components/Footer";

function App() {
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

  return (
    <>
      <Header contadorJogos={carrinhoItem.length} />
      <Promotion onAddCarrinho={handleAddCarrinho} />
      <CarrinhoOffCanvas
        onRemoveCarrinho={handleRemoveCarrinho}
        onUpdateCarrinho={handleUpdateCarrinho}
        carrinhoItem={carrinhoItem}
      />
      <OutrosJogos onAddCarrinho={handleAddCarrinho} />
      <Footer />
    </>
  );
}

export default App;
