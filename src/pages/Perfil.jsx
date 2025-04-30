import React from "react";
import Header from "../components/Header";

const Perfil = () => {
  const friends = [
    {
      name: "Brr Brr Patapim",
      status: "On-line",
      game: "COUNTER STRIKE 2",
      picture: "https://placehold.co/74x74",
    },
    {
      name: "Dhroko",
      status: "Off-line",
      game: "",
      picture: "https://placehold.co/74x74",
    },
  ];

  const gameCard = [
    {
      title: "The Witcher 3",
      description: "RPG de mundo aberto",
      image: "https://placehold.co/150x150",
    },
    {
      title: "Cyberpunk 2077",
      description: "Futuro distópico e ação",
      image: "https://placehold.co/150x150",
    },
    {
      title: "Elden Ring",
      description: "Aventura e fantasia sombria",
      image: "https://placehold.co/150x150",
    },
  ];

  return (
    <>
      <Header />
      <div className="container py-5 w-50 d-flex align-items-start">
        <img src="https://placehold.co/100x100" alt="" className="me-3" />
        <div>
          <h2>
            kenna <i className="bi bi-caret-down-fill"></i>
          </h2>
          <p>🇺🇾 Montevideo, Urugay</p>
        </div>
      </div>
      <div id="amigos" className="container py-5 w-50 bg-dark d-flex flex-column align-items-start">
        <h2 className="text-center text-light w-100">Amigos:</h2>
        <div className="w-100 d-flex flex-column align-items-center">
          {friends.map((friend, index) => (
            <div
              key={index}
              className="w-75 card text-light bg-black p-3 mb-3 d-flex align-items-center"
            >
              <img src={friend.picture} alt="" className="me-3" />
              <div className="d-flex flex-column">
                <p className="mb-1">{friend.name}</p>
                <p
                  className={`mb-1 ${
                    friend.status === "Off-line" ? "text-secondary" : "text-success"
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

      <div id="jogos" className="container py-5 w-50">
        <h2 className="text-center">Seus Jogos:</h2>
        <div className="d-flex flex-wrap justify-content-start">
          {gameCard.map((game, index) => (
            <div
              key={index}
              className="card text-light bg-dark m-2"
              style={{ width: "18rem" }}
            >
              <img src={game.image} className="card-img-top" alt={game.title} />
              <div className="card-body">
                <h5 className="card-title">{game.title}</h5>
                <p className="card-text">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Perfil;
