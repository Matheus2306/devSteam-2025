import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import GameCard from "../components/GameCard";
import Footer from "../components/Footer";

const Perfil = () => {
  const [randomGames, setRandomGames] = useState([]);

  const friends = [
    {
      name: "Alex Thunder",
      status: "On-line",
      game: "Fortnite",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "Mia Spark",
      status: "Off-line",
      game: "",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "John Blaze",
      status: "On-line",
      game: "Call of Duty",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "Sophia Light",
      status: "Off-line",
      game: "",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "Ethan Storm",
      status: "On-line",
      game: "Apex Legends",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "Olivia Frost",
      status: "Off-line",
      game: "",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "Liam Shadow",
      status: "On-line",
      game: "Valorant",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "Emma Flame",
      status: "Off-line",
      game: "",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "Noah Blaze",
      status: "On-line",
      game: "Overwatch",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "Ava Moon",
      status: "Off-line",
      game: "",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "Lucas Frost",
      status: "On-line",
      game: "League of Legends",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "Isabella Star",
      status: "Off-line",
      game: "",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "Mason Knight",
      status: "On-line",
      game: "PUBG",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "Charlotte Sky",
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
        categoria: "FPS",
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
        ultimaVezJogado: "09/04/2025",
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
        titulo: "FIFA 24",
        tempoDeJogo: "11h",
        ultimaVezJogado: "10/03/2025",
        imagem:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg",
      },
    ],
    []
  );

  useEffect(() => {
    const shuffledGames = [...games].sort(() => 0.5 - Math.random());
    setRandomGames(shuffledGames.slice(0, 6)); // Alterado para 6 jogos
  }, [games]);

  return (
    <>
      <Header />
      <div className="container py-5 w-100 d-flex align-items-start">
        <img src="https://placehold.co/100x100" alt="" className="me-3" />
        <div>
          <h2>
            kenna
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
          <p>🇺🇾 Montevideo, Urugay</p>
        </div>
      </div>
      <div className="d-flex justify-content-start flex-column align-items-start gap-5">
        <div
          id="amigos"
          className="py-5 w-100 bg-dark d-flex flex-column align-items-start m-5"
        >
          <h2 className="text-center text-light w-100">Amigos:</h2>
          <div className="w-100 d-flex flex-wrap gap-3">
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
            className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4"
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
