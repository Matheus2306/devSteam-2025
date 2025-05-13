import React, { useEffect, useState } from "react";
import ModalcreateCategoria from "./ModalcreateCategoria";

const CreateCatego = (props) => {
  const [categorias, setCategorias] = useState([]);

  // Buscar as categorias no localStorage ao carregar o componente
  useEffect(() => {
    const categoriasExistentes = JSON.parse(localStorage.getItem("devCategoria")) || [];
    setCategorias(categoriasExistentes);
  }, []);

  // Atualizar o estado e o localStorage ao criar uma nova categoria
  const handleCreate = (data) => {
    const novaCategoria = { ...data };
    const novasCategorias = [...categorias, novaCategoria];
    setCategorias(novasCategorias);
    localStorage.setItem("devCategoria", JSON.stringify(novasCategorias));
  };

  // Atualizar o estado e o localStorage ao excluir uma categoria
  const deleteCategoria = (index) => {
    const novasCategorias = [...categorias];
    novasCategorias.splice(index, 1);
    setCategorias(novasCategorias);
    localStorage.setItem("devCategoria", JSON.stringify(novasCategorias));
  };

  // Alternar a validade de uma categoria
  const toggleValidade = (index) => {
    const novasCategorias = [...categorias];
    novasCategorias[index].valido = !novasCategorias[index].valido;
    setCategorias(novasCategorias);
    localStorage.setItem("devCategoria", JSON.stringify(novasCategorias));
  };

  return (
    <div
      className="w-25 h-75 overflow-y-hidden create m-3 rounded-3"
      id="CreateCatego"
    >
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div
          id="headerCreate"
          className="w-100 d-flex justify-content-around align-items-center shadow-sm bg-dark rounded-3 p-2"
        >
          <h3 className="text-white m-0">Categorias</h3>
          <span
            role="button"
            className="px-2 rounded-1 bg-success"
            data-bs-toggle="modal"
            data-bs-target="#modalCategoria"
          >
            <i className="bi bi-plus fs-3"></i>
          </span>
        </div>
      </div>
      <div
        className="w-100 h-100 d-flex flex-column align-items-center overflow-auto"
        id="categoriasContainer"
        style={{ maxHeight: "690px" }}
      >
        {categorias.length === 0 ? (
          <h3 className="text-white fs-5 my-2">Nenhuma categoria cadastrada</h3>
        ) : (
          categorias.map((categoria, index) => (
            <div
              key={index}
              className="w-100 d-flex justify-content-between categorias my-2 align-items-center rounded-3 p-2 my-2"
            >
              <h4 className="text-white mx-3 fs-5">{categoria.nome}</h4>
              <div className="d-flex align-items-center mx-5 gap-3">
                <input
                  type="checkbox"
                  checked={categoria.valido}
                  onChange={() => toggleValidade(index)}
                  className="form-check-input mx-2 shadow-none bg-dark border-0 fs-5 m-0"
                />
                <i
                  className="bi bi-trash text-danger fs-5"
                  role="button"
                  onClick={() => deleteCategoria(index)}
                ></i>
              </div>
            </div>
          ))
        )}
      </div>
      <ModalcreateCategoria handleCreate={handleCreate} />
    </div>
  );
};

export default CreateCatego;
