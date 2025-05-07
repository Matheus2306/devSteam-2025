import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Checkout from "./pages/Checkout.jsx";
import SobreNos from "./pages/SobreNos.jsx";
import { formatarMoeda } from "./utils/formatters.js";
import GameDescription from "./pages/GameDescription.jsx";
import Perfil from "./pages/Perfil.jsx";
import NotFound from "./pages/NotFound.jsx";
import Cadastrar from "./pages/Cadastrar.jsx"; // Importando o componente Cadastrar

// Contexto global acessível a todas as rotas
export const GlobalContext = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContext.Provider value={{ formatarMoeda }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastrar />} /> {/* Nova rota */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/GameDescription" element={<GameDescription />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  </React.StrictMode>
);
