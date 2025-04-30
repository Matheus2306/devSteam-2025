import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SobreNos = () => {
  return (
    <div style={{ backgroundColor: '#1b2838', color: '#FFFFFF' }} className="d-flex flex-column min-vh-100">
      {/* Header */}
      <header className="w-100">
        <Header />
      </header>

      {/* Conteúdo principal */}
      <main className="flex-grow-1 py-5">
        {/* Título */}
        <header className="text-center mb-5">
          <h1 className="text-primary">Quem Somos</h1>
        </header>

        {/* Texto introdutório */}
        <section className="container text-center mb-5">
          <p className="fs-5">
            Somos quatro amigos apaixonados por games que decidiram criar a RatZone, uma plataforma simples e direta para quem ama jogar.
          </p>
        </section>

        {/* Cartões da equipe */}
        <section className="container">
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card bg-secondary text-white text-center border-0 rounded-3 shadow">
                <img src="src/img/bryan.jpg" alt="Avatar" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '150px', height: '150px' }} />
                <div className="card-body">
                  <h3 className="card-title text-primary">Bryan</h3>
                  <p className="card-text fw-bold">Dev Front</p>
                  <p className="card-text">Responsável por criar interfaces incríveis e funcionais.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bg-secondary text-white text-center border-0 rounded-3 shadow">
                <img src="src/img/pedro.jpg" alt="Avatar" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '150px', height: '150px' }} />
                <div className="card-body">
                  <h3 className="card-title text-primary">Pedro</h3>
                  <p className="card-text fw-bold">Dev Back</p>
                  <p className="card-text">Cuida de toda a lógica e infraestrutura do site.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bg-secondary text-white text-center border-0 rounded-3 shadow">
                <img src="src/img/joao.jpg" alt="Avatar" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '150px', height: '150px' }} />
                <div className="card-body">
                  <h3 className="card-title text-primary">João Pedro</h3>
                  <p className="card-text fw-bold">Designer</p>
                  <p className="card-text">Cria visuais incríveis para a RatZone.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bg-secondary text-white text-center border-0 rounded-3 shadow">
                <img src="src/img/matheusi.png" alt="Avatar" className="card-img-top rounded-circle mx-auto mt-3 object-fit-cover img-fluid" style={{ width: '150px', height: '150px' }} />
                <div className="card-body">
                  <h3 className="card-title text-primary">Matheus</h3>
                  <p className="card-text fw-bold">FullStack</p>
                  <p className="card-text">Garante que esteja tudo funcionando com a RatZone.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Missão */}
        <section className="container mt-5">
          <h2 className="text-center text-primary mb-4">Nossa Missão</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-dark text-white border-secondary">
              <strong className="text-primary">Trazer os melhores jogos:</strong> Selecionamos os títulos mais amados pela comunidade gamer.
            </li>
            <li className="list-group-item bg-dark text-white border-secondary">
              <strong className="text-primary">Interface fácil de usar:</strong> Criamos uma experiência simples e intuitiva para todos.
            </li>
            <li className="list-group-item bg-dark text-white border-secondary">
              <strong className="text-primary">Comunidade gamer unida:</strong> Promovemos um espaço para gamers se conectarem e compartilharem.
            </li>
            <li className="list-group-item bg-dark text-white border-secondary">
              <strong className="text-primary">Suporte direto e rápido:</strong> Estamos sempre prontos para ajudar com qualquer dúvida ou problema.
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-100">
        <Footer />
      </footer>
    </div>
  );
};

export default SobreNos;