import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Header = (props) => {
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    const usuarioLogado = localStorage.getItem("devlogin");
    if (usuarioLogado) {
      setUsuario(JSON.parse(usuarioLogado));
    }
  }, []);

  return (
    <header className="pt-4 w-100 navbar navbar-dark bg-dark justify-content-around align-items-center">
      <div id="info" className="d-flex gap-5 w-50 justify-content-between">
        <div
          id="logo"
          role="button"
          className="d-flex align-items-center me-5"
          onClick={() => (window.location.href = "/")}
        >
          <img
            src="src/img/Ratzomne_1.png"
            alt=""
            style={{ width: "75px", height: "75px" }}
          />
          <span className="navbar-brand fw-bold fs-3 d-flex">
            RatZone <small className="fs-6 top-0">TM</small>
          </span>
        </div>

        <input
          type="text"
          className="w-100 d-none d-md-block border-0 rounded-1 buscar px-4 my-2 ms-5"
          placeholder="Buscar..."
        />
      </div>

      <div id="carrinho" className="d-flex align-items-center gap-3">
        {usuario ? (
          <span className="d-flex align-items-center gap-2 me-0 me-md-5">
            <span className="d-none d-md-block">
              Olá, {usuario.nome.split(" ")[0]}!
            </span>
            <div className="dropdown">
              <div
                role="button"
                className=" border-0"
                type="div"
                id="dropdownPerfil"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={`https://ui-avatars.com/api/?name=${usuario.nome}&background=2b87ae&color=fff`}
                  alt={usuario.nome}
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </div>
              <ul
                className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                aria-labelledby="dropdownPerfil"
              >
                <li>
                  <Link to={"/perfil"} className="dropdown-item">
                    Perfil
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    onClick={() => {
                      localStorage.removeItem("devlogin");
                      location.reload();
                    }}
                    className="dropdown-item"
                  >
                    Sair
                  </Link>
                </li>
                <li>
                  <Link to={"/cadastro-cartao"} className="dropdown-item">
                    Cadastrar Cartão
                  </Link>
                </li>
                {usuario.Role === "ADM" && (
                  <li>
                    <Link to={"/geriradm"} className="dropdown-item">
                      Gerir ADM
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </span>
        ) : (
          <Link
            to="/login"
            role="button"
            className="d-flex gap-3 justify-content-center align-items-center text-decoration-none text-light"
          >
            <i className="bi bi-person-circle fs-3"></i>
            <div className="d-none d-md-flex flex-column m-0 w-50">
              <span className="h6 m-0">Olá, faça seu login ou cadastre-se</span>
            </div>
          </Link>
        )}

        <div className="position-relative">
          <i
            role="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#carrinhoOffCanvas"
            className="bi bi-cart4 text-light fs-2"
          ></i>

          {props.contadorJogos > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {props.contadorJogos}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
