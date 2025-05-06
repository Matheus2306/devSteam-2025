import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Esquerda: Direitos autorais e links */}
        <div className="d-flex align-items-center">
          <p className="mb-0 me-3">© 2025 Todos os direitos reservados RatZone</p>
          <a href="/sobre-nos" className="text-white text-decoration-none me-3">Sobre Nós</a>

          {/* Dropup para FAQ */}
        
        </div>

        <div className="dropup w-100">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="faqDropup"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              FAQ
            </button>
            <div
              className="dropdown-menu dropdown-menu-dark p-4 shadow rounded-3"
              aria-labelledby="faqDropup"
             
            >
              <div className="row g-3">
                {/* Coluna 1 */}
                <div className="col-md-4">
                  <div className="bg-secondary p-3 rounded">
                    <strong>O que é a RatZone?</strong>
                    <p>RatZone é uma plataforma para gamers apaixonados por jogos.</p>
                  </div>
                  <div className="bg-secondary p-3 rounded mt-3">
                    <strong>Como posso entrar em contato?</strong>
                    <p>Você pode nos contatar pelo e-mail suporte@ratzone.com.</p>
                  </div>
                  <div className="bg-secondary p-3 rounded mt-3">
                    <strong>Preciso pagar para usar a RatZone?</strong>
                    <p>Não! A plataforma é gratuita, exceto para compras de jogos.</p>
                  </div>
                </div>

                {/* Coluna 2 */}
                <div className="col-md-4">
                  <div className="bg-secondary p-3 rounded">
                    <strong>Posso jogar com meus amigos?</strong>
                    <p>A RatZone é apenas uma plataforma de vendas de jogos.</p>
                  </div>
                  <div className="bg-secondary p-3 rounded mt-3">
                    <strong>Como criar uma conta?</strong>
                    <p>Clique em "Cadastre-se" no topo do site e preencha os dados.</p>
                  </div>
                  <div className="bg-secondary p-3 rounded mt-3">
                    <strong>Quais plataformas são suportadas?</strong>
                    <p>PC e celular (Android/iOS).</p>
                  </div>
                </div>

                {/* Coluna 3 */}
                <div className="col-md-4">
                  <div className="bg-secondary p-3 rounded">
                    <strong>Existe algum sistema de ranking?</strong>
                    <p>Não! Por enquanto, não há rankings na plataforma.</p>
                  </div>
                  <div className="bg-secondary p-3 rounded mt-3">
                    <strong>Como reportar um bug ou erro de compra?</strong>
                    <p>Entre em contato pelo e-mail suporte@ratzone.com.</p>
                  </div>
                  <div className="bg-secondary p-3 rounded mt-3">
                    <strong>Quais jogos estão disponíveis?</strong>
                    <p>Oferecemos uma ampla variedade de jogos para todos os gostos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* Centro: Ícones de redes sociais */}
        <div className="d-flex align-items-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none me-3">
            <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none me-3">
            <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
            <i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i>
          </a>
        </div>

        {/* Direita: Logo */}
        <div>
          <img src="src/img/Ratzomne_1.png" alt="Logo" className="img-fluid" style={{ width: '74px', height: '74px' }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;