import React from "react";
import ModalCreate from "./ModalCreate";

const Create = (props) => {
  return (
    <div
      className="w-25 h-75 overflow-y-hidden create m-3 rounded-3"
      id="Create"
    >
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
      <div
        className="w-100 h-100 d-flex flex-column align-items-center overflow-auto"
        id="cuponsContainer"
        style={{ maxHeight: "690px" }}
      >
        {props.cupom.length === 0 ? (
          <h3 className="text-white fs-5 my-2">
            Nenhum {props.title} cadastrado
          </h3>
        ) : (
          props.cupom.map((cupom, index) => (
            <div
              key={index}
              className="w-100 d-flex justify-content-between cupons my-2 align-items-center rounded-3 p-2 my-2"
            >
              <div>
                <h4 className="text-white mx-3 fs-5">{cupom.nome}</h4>
                <h5 className="text-white mx-3">
                  {cupom.validade === "" ? (
                    <span className=""></span>
                  ) : (
                    <span className="fs-6 text-light">{cupom.validade}</span>
                  )}
                </h5>
              </div>
              <div className="d-flex align-items-center mx-5 gap-3">
                <span className="text-light bg-success p-2 rounded-1">
                  {cupom.desconto}%
                </span>
                <input
                  type="checkbox"
                  checked={cupom.valido}
                  onChange={() => props.toggleValidade(index)} // Chama a função ao alterar o estado
                  className="form-check-input mx-2 shadow-none bg-dark border-0 fs-5 m-0"
                />
                <i
                  className="bi bi-trash text-danger fs-5"
                  role="button"
                  onClick={() => props.deleteCupons(index)}
                ></i>
              </div>
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
