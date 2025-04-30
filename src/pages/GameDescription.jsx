import React from "react";
import Header from "../components/Header";
import MarcadorCategoria from "../components/MarcadorCategoria";

const GameDescription = () => {
  return (
    <div className="w-100 h-100">
    <Header />
    <img
      src="https://placehold.co/1920x1080"
      className="z-0 h-100 w-100 position-absolute opacity-25"
      alt=""
    />
      <div
        className="z-1 gradientFundo h-100 w-100 position-absolute"
        alt=""
      ></div>
      <div className="container ">
        <div className="row my-5 gap-5 ">
        <div className="my-3 z-2">
          <span className="fs-2 text-light">Titulo do jogo</span>
          <hr />
        </div>
          <div className="col-md-6 d-flex flex-column justify-content-center z-2">
            <div id="carouselExampleCaptions" class="carousel slide">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://placehold.co/600x450"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://placehold.co/600x450"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://placehold.co/600x450"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <div>
                <div className="carousel-caption d-none d-md-block">
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <i className="bi bi-arrow-left fs-4 text-black"></i>
                  </button>
                  <button
                    class="carousel-control-next h-25"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <i className="bi bi-arrow-right fs-4 text-black"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="my-3">
              <button className="btn text-light d-flex gap-2 buttons">
                <i className="bi bi-plus"></i>
                <span>Lista de Desejos</span>
              </button>
            </div>
            <div className="w-100 position-relative buy p-3 rounded-1 mb-4">
              <p>titulo do jogo</p>
              <div className="d-flex justify-content-end align-items-end">
                <div className="btn bg-black p-1 top-50 position-absolute d-flex gap-2 align-items-center">
                  <span className="h6 m-0 text-light">valor</span>
                  <span className="p-2 bg_gradient rounded-1 text-light d-flex gap-1">
                    <i className="bi bi-plus"></i>
                    Carrinho
                  </span>
                </div>
              </div>
            </div>
            <div className="w-100 position-relative buy p-3 rounded-1 mb-4">
              <p>titulo do jogo</p>
              <div className="d-flex justify-content-end align-items-end">
                <div className="btn bg-black p-1 top-50 position-absolute d-flex gap-2 align-items-center">
                  <span className="h6 m-0 text-light">valor</span>
                  <span className="p-2 bg_gradient rounded-1 text-light d-flex gap-1">
                    <i className="bi bi-plus"></i>
                    Carrinho
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md d-flex flex-column z-2">
            <div>
              <img
                src="https://placehold.co/450x200"
                className="img-fluid w-100"
                alt=""
              />
            </div>
            <div className="text-light h5 mt-3">
              <p>Descrição do jogo</p>
              <div className="text-secondary d-flex flex-column gap-2">
                <span>Análises Recentes: analise</span>
                <span>Todas as Análises: analise</span>
                <span>Data de Lançamento: Data</span>
                <span>Desenvolvedor: xxx</span>
                <span>distribuidora: xxx</span>
                <div className="d-flex flex-column gap-2">
                  <span>marcadores populares para esse produto:</span>
                  <div className="d-flex flex-wrap gap-2">
                    <MarcadorCategoria />
                    <MarcadorCategoria />
                    <MarcadorCategoria />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

  
    </div>
  );
};

export default GameDescription;
