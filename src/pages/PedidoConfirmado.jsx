import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PedidoConfirmado = () => {
  const pedido = {
    id: "123456",
    total: "R$ 250,00",
    cpf: "123.456.789-00",
    formaPagamento: "Cartão de Crédito",
    nome: "João Silva",
    telefone: "(11) 98765-4321",
    dataPagamento: new Date().toLocaleDateString("pt-BR"),
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <Header />

      {/* Conteúdo principal */}
      <main className="flex-grow-1 container py-5">
        <h1 className="text-center text-success mb-4">Pedido Confirmado!</h1>

        {/* Primeira Div */}
        <div className="bg-black p-4 rounded shadow mb-4">
          <p className="fs-5">
            Seu pedido foi realizado com sucesso. Em breve você receberá um
            e-mail no endereço <strong>admin@admin.com</strong> com todos os
            detalhes do seu pedido.
          </p>
          <div className="text-center mt-3">
            <span className="bg-success p-2 rounded-1 fw-bold fs-5">
              Pagamento Aprovado!
            </span>
          </div>
        </div>

        {/* Segunda Div */}
        <div className="bg-black p-4 rounded shadow">
          <h3 className="mb-3">Informações do Pedido</h3>
          <ul className="list-group list-group-item-dark">
            <li className="list-group-item-dark">
              <strong>ID do Pedido:</strong> {pedido.id}
            </li>
            <li className="list-group--dark">
              <strong>Total:</strong> {pedido.total}
            </li>
            <li className="list-group--dark">
              <strong>CPF:</strong> {pedido.cpf}
            </li>
            <li className="list-group--dark">
              <strong>Forma de Pagamento:</strong> {pedido.formaPagamento}
            </li>
            <li className="list-group--dark">
              <strong>Nome:</strong> {pedido.nome}
            </li>
            <li className="list-group--dark">
              <strong>Telefone:</strong> {pedido.telefone}
            </li>
            <li className="list-group--dark">
              <strong>Data do Pagamento:</strong> {pedido.dataPagamento}
            </li>
          </ul>
          <p className="text-danger mt-3">
            <strong>Reembolso disponível por 24 horas.</strong> Após isso, NÃO
            será mais possível o reembolso!
          </p>
        </div>
      <div className="d-flex justify-content-center mt-4">
          <a href="/" className="btn btn-danger p-3">
            Voltar
          </a>
      </div>
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PedidoConfirmado;