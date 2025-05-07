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
      setUsuario(JSON.parse(salvaUsuario)); // Carrega o nome do usuário do localStorage
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

  const games = React.useMemo(
    () => [
      {
        id: 1,
        titulo: "Counter-Strike 2",
        tempoDeJogo: "2h",
        ultimaVezJogado: "Ontem",
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
      },
      {
        id: 2,
        titulo: "Cyberpunk 2077",
        tempoDeJogo: "5h",
        ultimaVezJogado: "Hoje",
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
      },
      {
        id: 3,
        titulo: "Elden Ring",
        tempoDeJogo: "10h",
        ultimaVezJogado: "30/03/2025",
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
      },
      {
        id: 4,
        titulo: "Red Dead Redemption 2",
        tempoDeJogo: "12h",
        ultimaVezJogado: "02/05/2025",
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
      },
      {
        id: 5,
        titulo: "Hogwarts Legacy",
        tempoDeJogo: "8h",
        ultimaVezJogado: "28/03/2025",
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg",
      },
      {
        id: 6,
        titulo: "The Witcher 3: Wild Hunt",
        tempoDeJogo: "15h",
        ultimaVezJogado: "17/03/2025",
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
      },
      {
        id: 7,
        titulo: "God of War",
        tempoDeJogo: "25h",
        ultimaVezJogado: "06/03/2025",
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg",
      },
      {
        id: 8,
        titulo: "FIFA 25",
        tempoDeJogo: "120h",
        ultimaVezJogado: "10/03/2025",
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg",
      },
    ],
    []
  );

  useEffect(() => {
    const sortedGames = [...games].sort(
      (a, b) => parseInt(b.tempoDeJogo) - parseInt(a.tempoDeJogo)
    );
    const topGames = sortedGames.slice(0, 2); // Fixar os 2 mais jogados
    const remainingGames = sortedGames.slice(2);
    const shuffledGames = [...remainingGames].sort(() => 0.5 - Math.random());
    setRandomGames([...topGames, ...shuffledGames.slice(0, 2)]); // Adicionar 2 sorteados
  }, [games]);

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
        <div id="outrosJogos" className="container w-75 my-5 ">
          <h2 className="text-uppercase text-center text-md-start ms-md-5 ps-md-3 mb-4">
            Seus Jogos:
          </h2>
          <div
            id="itensJogos"
            className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 g-4"
          >
            {randomGames.map((item) => (
              <div
                id="cardsJogos"
                key={item.id}
                className="d-flex flex-column justify-content-end col"
              >
                <div className="d-flex flex-column justify-content-end card bg-dark text-light p-3">
                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    className="img-fluid rounded mb-3"
                  />
                  <h5 className="card-title">{item.titulo}</h5>
                  <p className="card-text">Tempo de Jogo: {item.tempoDeJogo}</p>
                  <p className="card-text">
                    Última Vez Jogado: {item.ultimaVezJogado}
                  </p>
                  {item.categoria && (
                    <p className="card-text">Categoria: {item.categoria}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Perfil;
