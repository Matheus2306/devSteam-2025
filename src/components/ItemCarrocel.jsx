import React from "react";

const ItemCarrocel = (props) => {
  if (!props.imagem) {
    return null; // Não renderiza nada se a imagem não for válida
  }
console.log(props.imagem)
  return (
    <div className={`carousel-item ${props.isActive ? "active" : ""}`}>
      <img src={props.imagem} className="d-block w-100" alt={props.alt || "Slide"} />
    </div>
  );
};

export default ItemCarrocel;
