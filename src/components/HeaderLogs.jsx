import React from "react";
import { useNavigate } from "react-router";

const HeaderLogs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <header className="d-flex justify-content-center align-items-center w-100 bg-dark">
      <div
        className="d-flex justify-content-center align-items-center gap-2 w-100"
        onClick={handleClick}
        role="button"
      >
        <img
          src="src/img/ratzoe_edit.png"
          className="img-fluid imgRde"
          alt=""
        />
        <span className="navbar-brand fw-bold fs-3 d-flex justify-content-center ">
          RatZone <small className="fs-6 top-0">TM</small>
        </span>
      </div>
    </header>
  );
};

export default HeaderLogs;
