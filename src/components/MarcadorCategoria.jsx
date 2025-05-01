import React from "react";

const MarcadorCategoria = (props) => {
  return (
    <div className="d-flex">
      <div className="px-2 rounded-1 py-1 buttons">
        <span>{props.categoria}</span>
      </div>
    </div>
  );
};

export default MarcadorCategoria;
