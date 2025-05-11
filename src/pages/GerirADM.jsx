import React, { useEffect, useState } from "react";
import NotFound from "./NotFound";
import HeaderLogs from "../components/HeaderLogs";
import Create from "../components/Create";

const GerirADM = () => {
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    const usuarioLogado = localStorage.getItem("devlogin");
    if (usuarioLogado) {
      setUsuario(JSON.parse(usuarioLogado));
    }
  }, []);

  const handleCreate = (data) => {
    const { input1, input2, input3 } = data;

    const novoCupom = {
      nome: input1,
      desconto: input2,
      valido: input3,
    };

    const cuponsExistentes = JSON.parse(localStorage.getItem("devCupom")) || [];
    cuponsExistentes.push(novoCupom);
    localStorage.setItem("devCupom", JSON.stringify(cuponsExistentes));
  };

  return (
    <div>
      {usuario.Role === "ADM" ? (
        <div className="w-100 vh-100">
          <HeaderLogs />
          <Create title={"Cupons"} handleCreate={handleCreate} />
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default GerirADM;
