import React, { useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import HeaderLogs from "../components/HeaderLogs";

const Login = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (nome && email) {
      localStorage.setItem("devlogin", JSON.stringify({ nome, email }));
      navigate("/");
    }
  };

  const handleSignUp = () => {
    navigate("/cadastro");
  }

  return (
    <div className="d-flex flex-column justify-content-between min-vh-100">
      <HeaderLogs />

      <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1 py-4">
        <form
          className="position-relative rounded-1 p-4 d-flex flex-column justify-content-center align-items-center w-100"
          style={{ maxWidth: "500px", minHeight: "450px" }}
          onSubmit={handleLogin}
        >
          <div className="formsBg rounded-2 z-1 position-absolute w-100 h-100"></div>
          <img
            className="z-0 position-absolute img-fluid opacity-50 w-100 h-100 object-fit-cover"
            src="src/img/Ratzomne_1.png"
            alt=""
          />


          <div className="z-2 d-flex flex-column w-100 gap-3 justify-content-center align-items-center">
            <h3 className="text-uppercase text-center">Entrar</h3>

            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="form-control inputLog p-3 border-0 text-light w-100"
              type="text"
              name="frmNome"
              id="frmNome"
              placeholder="Nome de usuário"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control inputLog p-3 border-0 text-light w-100"
              type="email"
              name="frmEmail"
              id="frmEmail"
              placeholder="E-mail"
            />

            <div className="d-flex flex-column gap-3 w-100 justify-content-center align-items-center">
              <span className="text-center">
                Não possui uma conta?{" "}
                <span
                  role="button"
                  className="text-decoration-underline text-info"
                  onClick={handleSignUp}
                >
                  Crie uma
                </span>
              </span>
              <button className="border-0 rounded btnColor text-light p-3 fs-5 w-100">
                Entrar <i className="bi bi-arrow-bar-right"></i>
              </button>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
