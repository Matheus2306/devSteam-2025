import React from "react";
import ItemCarrocel from "./ItemCarrocel";

const caroucel = (props) => {
  // Garante que props.imagem seja um array e filtra valores inválidos
  const imagens = Array.isArray(props.imagem)
    ? props.imagem.filter((img) => img) // Remove valores inválidos
    : [props.imagem].filter((img) => img); // Converte string para array e filtra

  if (imagens.length === 0) {
    return <p>Nenhuma imagem disponível para exibição.</p>; // Mensagem caso não haja imagens
  }

  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      {/* Indicadores */}
      <div className="carousel-indicators mb-0">
        {imagens.map((img, index) => (
          <button
            id="btn-indicador"
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={`${index === 0 ? "active rounded-1" : ""}`}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100px", // Largura do indicador
              height: "50px", // Altura do indicador
            }}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {imagens.map((item, index) => (
          <ItemCarrocel
            key={index}
            imagem={item}
            isActive={index === 0} // Passa se é o slide ativo
          />
        ))}
      </div>

    </div>
  );
};

export default caroucel;
