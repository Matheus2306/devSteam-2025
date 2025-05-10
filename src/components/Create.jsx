import React from "react";
import ModalCreate from "./ModalCreate";

const Create = (props) => {
  

  return (
    <div className="w-25 h-100 overflow-y-hidden create m-3 rounded-3" id="Create">
      <div clsassName="d-flex flex-column justify-content-center align-items-center">
        <div id="headerCreate" className="w-100 d-flex justify-content-around align-items-center shadow-sm bg-dark rounded-3 p-2">
          <h3 className="text-white m-0">{props.title}</h3>
          <span role="button" className="px-2 rounded-1 bg-success" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-plus fs-3"></i></span>
        </div>
      </div>
      <ModalCreate title={props.title}/>
    </div>
  );
};

export default Create;
