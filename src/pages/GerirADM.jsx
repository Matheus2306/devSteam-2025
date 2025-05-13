import React, { useEffect, useState } from "react";
import NotFound from "./NotFound";
import HeaderLogs from "../components/HeaderLogs";
import Create from "../components/Create";
import CreateCatego from "../components/CreateCatego";

const GerirADM = () => {
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    const usuarioLogado = localStorage.getItem("devlogin");
    if (usuarioLogado) {
      setUsuario(JSON.parse(usuarioLogado));
    }
  }, []);

  const [cupons, setCupons] = useState([]);

  // Buscar os cupons no localStorage ao carregar o componente
  useEffect(() => {
    const cuponsExistentes = JSON.parse(localStorage.getItem("devCupom")) || [];
    setCupons(cuponsExistentes);
  }, []);

  // Atualizar o estado e o localStorage ao criar um novo cupom
  const handleCreate = (data) => {
    // Verifica se os campos estão preenchidos
    if (!data.input1 || !data.input2) {
      alert("Preencha todos os campos!");
    } else {
      const novoCupom = {
        nome: data.input1,
        desconto: data.input2,
        validade: data.input3,
        valido: true,
      };

      const cupomExistente = cupons.find(
        (cupom) => cupom.nome === novoCupom.nome
      );
      if (cupomExistente) {
        alert("Esse cupom já existe!");
        return;
      } else {
        const novosCupons = [...cupons, novoCupom];
        setCupons(novosCupons);
        localStorage.setItem("devCupom", JSON.stringify(novosCupons));
      }
    }
  };

  // Atualizar o estado e o localStorage ao excluir um cupom
  const deleteCupons = (index) => {
    const novosCupons = [...cupons];
    novosCupons.splice(index, 1);
    setCupons(novosCupons);
    localStorage.setItem("devCupom", JSON.stringify(novosCupons));
  };

  // Alternar a validade de um cupom
  const toggleValidade = (index) => {
    const novosCupons = [...cupons];
    novosCupons[index].valido = !novosCupons[index].valido; // Alterna entre true e false
    setCupons(novosCupons);
    localStorage.setItem("devCupom", JSON.stringify(novosCupons)); // Atualiza o localStorage
  };


  return (
    <div>
      {usuario.Role === "ADM" ? (
        <div className="w-100 vh-100">
          <HeaderLogs />
          <div className="d-flex h-100 justify-content-around">
            <Create
              title={"Cupom"}
              handleCreate={handleCreate}
              deleteCupons={deleteCupons}
              toggleValidade={toggleValidade}
              cupom={cupons}
            />
            <CreateCatego />
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default GerirADM;
