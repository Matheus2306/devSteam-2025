import React from "react";

const TituloGameDescr = (props) => {
  return (
    <div className="my-3 z-2">
      <div className="d-flex align-items-center justify-content-between gap-2">
        <span className="fs-2 text-light">
          {props.titulo || "Titulo do jogo"}
        </span>
        <span onClick={props.voltar} className="btn text-light fs-5 d-flex gap-2">
          <i className="bi bi-box-arrow-left"></i>Voltar
        </span>
      </div>
      <hr />
    </div>
  );
};

export default TituloGameDescr;
