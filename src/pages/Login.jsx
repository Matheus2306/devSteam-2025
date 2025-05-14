import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import HeaderLogs from "../components/HeaderLogs";

const Login = () => {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se já existe algum cadastro no localStorage
    const cadastros = JSON.parse(localStorage.getItem("devCadastro")) || [];
    // Adiciona a conta padrão de administrador se ainda não existir
    const admExists = cadastros.some(
      (cadastro) => cadastro.email === "adm@adm.com"
    );
    if (!admExists) {
      cadastros.push({
        nome: "ADM",
        email: "adm@adm.com",
        senha: "1234",
        Role: "ADM",
      });
      localStorage.setItem("devCadastro", JSON.stringify(cadastros));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Recupera todos os cadastros do localStorage
    const cadastros = JSON.parse(localStorage.getItem("devCadastro"));

    // Verifica se o e-mail e a senha correspondem a algum cadastro
    const usuarioValido = cadastros.find(
      (cadastro) => cadastro.email === email && cadastro.senha === senha
    );
    // Salva o usuário logado no localStorage
    localStorage.setItem("devlogin", JSON.stringify(usuarioValido));
    // Verifica se o usuário é um administrador
    const isADM = usuarioValido && usuarioValido.Role === "ADM";
    if (usuarioValido && usuarioValido.Role === "ADM") {
      if (isADM) {
        alert("Login realizado com sucesso!");
        navigate("/"); // Redireciona para a página de gerenciamento de ADM
      }
    } else {
      if (usuarioValido) {
        alert("Login realizado com sucesso!");
        navigate("/"); // Redireciona para a página inicial
      } else {
        alert("E-mail ou senha incorretos!");
      }
    }
  };

  const handleSignUp = () => {
    navigate("/cadastrar"); // Redireciona para a página de cadastro
  };

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control inputLog p-3 border-0 text-light w-100"
              type="email"
              name="frmEmail"
              id="frmEmail"
              placeholder="E-mail"
            />

            <input
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="form-control inputLog p-3 border-0 text-light w-100"
              type="password"
              name="frmSenha"
              id="frmSenha"
              placeholder="Senha"
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
