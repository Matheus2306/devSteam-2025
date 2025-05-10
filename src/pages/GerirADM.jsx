import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import NotFound from "./NotFound"; // Ajuste o caminho conforme necessário
import HeaderLogs from "../components/HeaderLogs";
import Create from "../components/Create";

const GerirADM = () => {
  // Resgatar o usuário logado
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    const usuarioLogado = localStorage.getItem("devlogin");
    if (usuarioLogado) {
      setUsuario(JSON.parse(usuarioLogado));
    }
  }, []);

  return (
    <div >
      {usuario.Role === "ADM" ? (
        <div className="w-100 vh-100">
          <HeaderLogs />
          <Create title={"Cupons"}/>
        </div>
      ) : (
        <NotFound /> // Renderiza o componente NotFound se o usuário não for ADM
      )}
    </div>
  );
};

export default GerirADM;
