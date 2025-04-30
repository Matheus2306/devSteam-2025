import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
       
        <div className="d-flex align-items-center">
          <p className="mb-0 me-3">© 2025 Todos os direitos reservados</p>
          <a href="/sobre-nos" className="text-white text-decoration-none me-3">Sobre Nós</a>
          <a href="/faq" className="text-white text-decoration-none">FAQ</a>
        </div>

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

       
        <div>
          <img src="src/img/Ratzomne_1.png" alt="Logo" className="img-fluid" style={{ width: '74px', height: '74px' }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;