import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// Stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Páginas
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Checkout from "./pages/Checkout.jsx";
import SobreNos from "./pages/SobreNos.jsx";
import { formatarMoeda } from "./utils/formatters.js";
import GameDescription from "./pages/GameDescription.jsx";
import Perfil from "./pages/Perfil.jsx";
import NotFound from "./pages/NotFound.jsx";
import CadastroCartao from "./pages/CadastroCartao.jsx";

// Contexto global acessível a todas as rotas
export const GlobalContext = createContext(null);

// Stripe Public Key
const stripePromise = loadStripe(
  "pk_test_51RLmBAFZd9YdmyP7RPfzInp3F5OIMUqBYy9ST8JLH5nb1e2h0ZuOSGjbfmuLOKLfm82tTBF0oKVGhCbjwxw48Jal00Mvwox9gl"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContext.Provider value={{ formatarMoeda }}>
      <Elements stripe={stripePromise}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/GameDescription" element={<GameDescription />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/cadastro-cartao" element={<CadastroCartao />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Elements>
    </GlobalContext.Provider>
  </React.StrictMode>
);
