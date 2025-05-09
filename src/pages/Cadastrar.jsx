import React, { useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import HeaderLogs from "../components/HeaderLogs";

const Cadastrar = () => {
  const [nome, setNome] = useState([]);
  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);
  const [telefone, setTelefone] = useState([]);
  const [Id, setId] = useState([]);
  const navigate = useNavigate();

  // Gera um ID único para o usuário
  const gerarId = () => {
    const id = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
    setId(id); // Atualiza o estado com o ID gerado
    return id; // Retorna o ID gerado
  };

  const handleCadastro = (e) => {
    e.preventDefault();
  
    if (nome && email && telefone && senha) {
      const novoCadastro = {
        Id: gerarId(),
        nome,
        email,
        senha,
        telefone,
      };
  
      // Recupera cadastros existentes do localStorage
      const cadastrosExistentes = JSON.parse(localStorage.getItem("devCadastro")) || [];
  
      // Verifica se o e-mail já está cadastrado
      const emailJaCadastrado = cadastrosExistentes.some(
        (cadastro) => cadastro.email === email
      );
  
      if (emailJaCadastrado) {
        alert("E-mail já cadastrado!");
        return;
      }
  
      // Adiciona o novo cadastro à lista
      cadastrosExistentes.push(novoCadastro);
  
      // Salva a lista atualizada no localStorage
      localStorage.setItem("devCadastro", JSON.stringify(cadastrosExistentes));
      navigate("/login");
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-between min-vh-100">
      <HeaderLogs />

      <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1 py-4">
        <form
          className="position-relative rounded-1 p-4 d-flex flex-column justify-content-center align-items-center w-100"
          style={{ maxWidth: "500px", minHeight: "500px" }}
          onSubmit={handleCadastro}
        >
          <div className="formsBg rounded-2 z-1 position-absolute w-100 h-100"></div>
          <img
            className="z-0 position-absolute img-fluid opacity-50 w-100 h-100 object-fit-cover"
            src="src/img/Ratzomne_1.png"
            alt=""
          />

          <div className="z-2 d-flex flex-column w-100 gap-3 justify-content-center align-items-center">
            <h3 className="text-uppercase text-center">Cadastrar</h3>

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

            <input
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="form-control inputLog p-3 border-0 text-light w-100"
              type="password"
              name="frmSenha"
              id="frmSenha"
              placeholder="Senha"
            />

            <input
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="form-control inputLog p-3 border-0 text-light w-100"
              type="tel"
              name="frmTelefone"
              id="frmTelefone"
              placeholder="Telefone"
            />

            <div className="d-flex flex-column gap-3 w-100 justify-content-center align-items-center">
              <button className="border-0 rounded btnColor text-light p-3 fs-5 w-100">
                Cadastrar <i className="bi bi-arrow-bar-right"></i>
              </button>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Cadastrar;
