import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import GameCard from "../components/GameCard";
import Footer from "../components/Footer";

const Perfil = () => {
  const [randomGames, setRandomGames] = useState([]);
  const [usuario, setUsuario] = useState(null); // Estado para armazenar o usuário

  useEffect(() => {
    const salvaUsuario = localStorage.getItem("devlogin");
    if (salvaUsuario) {
      const usuarioLogado = JSON.parse(salvaUsuario);
      setUsuario(usuarioLogado);

      try {
        // Carrega os jogos comprados do localStorage
        const compras = JSON.parse(localStorage.getItem("devcompras")) || {};
        const jogosUsuario = compras[usuarioLogado.nome] || [];
        
        // Garante que os jogos sejam únicos e mapeia para as imagens corretas
        const jogosUnicos = jogosUsuario.reduce((acc, jogo) => {
          if (!acc.some((item) => item.id === jogo.id)) {
            acc.push(jogo);
          }
          return acc;
        }, []);
        
        setRandomGames(jogosUnicos);

        // Atualiza o localStorage com os jogos do usuário
        compras[usuarioLogado.nome] = jogosUnicos;
        localStorage.setItem("devcompras", JSON.stringify(compras));
      } catch (error) {
        console.error("Erro ao carregar as compras do localStorage:", error);
        setRandomGames([]); // Garante que a lista de jogos seja vazia em caso de erro
      }
    }
  }, []);

  const friends = [
    {
      name: "Brr Brr Patapim",
      status: "On-line",
      game: "Fortnite",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "ratin",
      status: "On-line",
      game: "EA FC 25",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "tripp troppa",
      status: "On-line",
      game: "Fortnite",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "Carlin du lavas",
      status: "Off-line",
      game: "",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "Dancanz",
      status: "On-line",
      game: "Apex Legends",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "MAIOR HATER de lol",
      status: "On-line",
      game: "League of legends",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "CadetDan32",
      status: "On-line",
      game: "Valorant",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "Guigas",
      status: "Off-line",
      game: "",
      picture: "https://placehold.co/74x74",
    },
  ];

  return (
    <>
      <Header />
      <div className="container py-5 w-100 d-flex align-items-start m-5">
        <img src="https://placehold.co/100x100" alt="" className="me-3" />
        <div>
          <h2>
            {usuario?.nome || "Usuário"} {/* Exibe o nome do usuário ou "Usuário" */}
            <button
              className="btn btn-link"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <i className="bi bi-caret-down-fill"></i>
            </button>
          </h2>
          <p>🇺🇾 Montevideo, Uruguay</p>
        </div>
      </div>
      <div className="d-flex justify-content-start d-flex gap-5">
        <div id="amigos" className="container py-5 w-50 bg-dark m-5">
          <h2 className="text-center text-light w-100">Amigos:</h2>
          <div className=" px-3 w-100 d-flex flex-wrap gap-3 m-5 py-5">
            {friends.map((friend, index) => (
              <div
                key={index}
                className="card text-light bg-black p-3 d-flex flex-row align-items-center"
                style={{ width: "300px" }}
              >
                <img
                  src={friend.picture}
                  alt=""
                  className="me-3"
                  style={{ width: "74px", height: "74px", objectFit: "cover" }}
                />
                <div className="d-flex flex-column">
                  <p className="mb-1">{friend.name}</p>
                  <p
                    className={`mb-1 ${
                      friend.status === "Off-line"
                        ? "text-secondary"
                        : "text-success"
                    }`}
                  >
                    {friend.status}
                  </p>
                  {friend.game && <p className="mb-0">{friend.game}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="outrosJogos" className="container w-75 my-5">
          <h2 className="text-uppercase text-center text-md-start ms-md-5 ps-md-3 mb-4">
            Seus Jogos:
          </h2>
          {randomGames.length === 0 ? (
            <p className="text-center">Você ainda não comprou nenhum jogo.</p>
          ) : (
            <div
              id="itensJogos"
              className="d-flex flex-column gap-3"
              style={{
                maxHeight: "400px",
                overflowY: "auto",
              }}
            >
              {randomGames.map((item) => {
                const primeiraImagem = Array.isArray(item.imagem)
                  ? item.imagem[0]
                  : item.imagem; // Adjusted logic to handle array or single image

                return (
                  <div
                    id="cardsJogos"
                    key={item.id}
                    className="d-flex align-items-center bg-dark text-light p-3 rounded"
                    style={{
                      height: "120px",
                      width: "100%",
                    }}
                  >
                    <img
                      src={primeiraImagem} // Use the adjusted logic for the image
                      alt={item.titulo}
                      className="me-3 rounded"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                    <h5 className="mb-0">{item.titulo}</h5>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Perfil;
