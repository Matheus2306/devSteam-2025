import React, { useState } from "react";

const ModalCreate = (props) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const handleSave = () => {
    props.handleCreate({ input1, input2, input3 });
    setInput1("");
    setInput2("");
    setInput3("");
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-white" style={{ backgroundColor: "#112232" }}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {props.title}
            </h1>
            <button
              type="button"
              data-bs-dismiss="modal"
              className="btn"
              aria-label="Close"
            >
              <i className="bi bi-x fs-3 text-light"></i>
            </button>
          </div>
          <form>
            <div className="modal-body">
              <input
                type="text"
                className="form-control my-2 p-3 inputLog border-0 text-light"
                placeholder={props.input1}
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
              />
              <input
                type="text"
                className="form-control my-2 p-3 inputLog border-0 text-light"
                placeholder={props.input2}
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />
              <input
                type="date"
                className="form-control my-2 p-3 inputLog border-0 text-light"
                placeholder={props.input3}
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSave}
                data-bs-dismiss="modal"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalCreate;
