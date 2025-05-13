import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EditarPerfil = () => {
  return (
    <>
        <Header />
      <div className="container py-5">
        <div
          className="card shadow-lg rounded-4 border-0 mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <div className="card-body p-4">
            <div className="d-flex align-items-center mb-4">
              <img
                src="https://placehold.co/100x100"
                alt="Foto de perfil"
                className="rounded-circle me-4 border"
                width="100"
                height="100"
              />
              <div>
                <h3 className="mb-1">kenna</h3>
                <p className="text-muted mb-0">Usuário desde: 30/03/2017</p>
              </div>
            </div>

            <ul className="list-group list-group-flush mb-4">
              <li
                className="list-group-item d-flex justify-content-between align-items-center text-light rounded-1 border-0 mb-3"
                style={{ backgroundColor: "#547792", margin: "0 10px" }}
              >
                <span>Email: kenna23@gmail.com</span>
                <button className="btn btn-primary">Alterar</button>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center text-light rounded-1 border-0 mb-3"
                style={{ backgroundColor: "#547792", margin: "0 10px" }}
              >
                <span>Senha: *******</span>
                <button className="btn btn-primary">Alterar</button>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center text-light rounded-1 border-0 mb-3"
                style={{ backgroundColor: "#547792", margin: "0 10px" }}
              >
                <span>Métodos de Pagamento: 2</span>
                <button className="btn btn-secondary">Ver</button>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center text-light rounded-1 border-0 mb-3"
                style={{ backgroundColor: "#547792", margin: "0 10px" }}
              >
                <span>Telefone: xx xx xxxxx-xxxx</span>
                <button className="btn btn-primary">Alterar</button>
              </li>
            </ul>

            <div className="d-flex justify-content-end gap-3">
              <button className="btn btn-danger">Excluir</button>
              <button className="btn btn-success">Salvar</button>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </>
  );
};

export default EditarPerfil;
