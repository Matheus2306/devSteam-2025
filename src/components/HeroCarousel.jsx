import React, { useEffect, useState } from 'react';
import HeroItens from './HeroItens';

const HeroCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % props.jogos.length);
    }, 5000); // Alterna a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [props.jogos.length]);

  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade">
      <div className="carousel-indicators">
        {props.jogos.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === activeIndex ? 'active' : ''}
            aria-current={index === activeIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveIndex(index)} // Permite alternar manualmente
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {props.jogos.map((jogo, index) => (
          <HeroItens
            key={jogo.id}
            imagem={Array.isArray(jogo.imagem) ? jogo.imagem[0] : jogo.imagem}
            titulo={jogo.titulo}
            precoComDesconto={jogo.preco * (1 - jogo.desconto / 100)}
            desconto={jogo.desconto}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;