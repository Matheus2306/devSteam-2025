import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Promotion from "./components/Promotion";
import CarrinhoOffCanvas from "./components/CarrinhoOffCanvas";
import OutrosJogos from "./components/OutrosJogos";
import Footer from "./components/Footer";

function App() {
  const [carrinhoItem, setCarrinhoItem] = useState([]);

  // Este useEffect é executado sempre que o estado `carrinhoItem` muda.
  // Ele salva o estado atual do carrinho no localStorage com a chave "devcarrinho".
  // Isso garante que o estado do carrinho persista entre recarregamentos da página.
  useEffect(() => {
    localStorage.setItem("devcarrinho", JSON.stringify(carrinhoItem));
  }, [carrinhoItem]);

  // Este useEffect é executado uma vez quando o componente é montado (array de dependências vazio).
  // Ele recupera o estado salvo do carrinho no localStorage (se existir) e atualiza o estado `carrinhoItem`.
  // Isso permite que o aplicativo carregue o estado anterior do carrinho quando o usuário revisitar a página.
  useEffect(() => {
    const salvaCarrinho = localStorage.getItem("devcarrinho");
    salvaCarrinho && setCarrinhoItem(JSON.parse(salvaCarrinho));
  }, []);

  // console.log(localStorage.getItem("devcarrinho"));

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
    <>
      <Header contadorJogos={carrinhoItem.length} />
      <Promotion
        onAddCarrinho={handleAddCarrinho} //adicionando o click para promoção
      />

      <CarrinhoOffCanvas
        onRemoveCarrinho={handleRemoveCarrinho}
        onUpdateCarrinho={handleUpdateCarrinho}
        carrinhoItem={carrinhoItem}
      />
      <OutrosJogos onAddCarrinho={handleAddCarrinho} />
      <Footer/>
    </>
  );
}

export default App;
