import React, { useEffect } from "react";
import ModalCreate from "./ModalCreate";

const Create = (props) => {
//buscar os cupons no localStorage
  const cuponsExistentes = JSON.parse(localStorage.getItem("devCupom")) || [];
  //se o usuario criar um cupom ele atuliza a pagina
  



  return (
    <div className="w-25 h-100 overflow-y-hidden create m-3 rounded-3" id="Create">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div
          id="headerCreate"
          className="w-100 d-flex justify-content-around align-items-center shadow-sm bg-dark rounded-3 p-2"
        >
          <h3 className="text-white m-0">{props.title}</h3>
          <span
            role="button"
            className="px-2 rounded-1 bg-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="bi bi-plus fs-3"></i>
          </span>
        </div>
        
      </div>
      <div className="w-100 h-100 d-flex flex-column  align-items-center">
        {cuponsExistentes.length === 0 ? (
          <h3 className="text-white">Nenhum cupom cadastrado</h3>
        ) : (
          cuponsExistentes.map((cupom, index) => (
            <div
              key={index}
              className="w-100 d-flex justify-content-around cupons my-3 align-items-center rounded-3 p-2 my-2"
            >
              <h4 className="text-white">{cupom.nome}</h4>
              <span className="text-light bg-success p-2 rounded-1">{cupom.desconto}%</span>
            </div>
          ))
        )}
      </div>
      <ModalCreate
        title={props.title}
        input1="Nome"
        input2="Desconto"
        input3="Validade"
        handleCreate={props.handleCreate}
      />
    </div>
  );
};

export default Create;
