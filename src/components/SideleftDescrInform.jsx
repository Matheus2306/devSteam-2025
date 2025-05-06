import React from 'react'
import Caroucel from './Caroucel'
import GameValor from './GameValor'

const SideleftDescrInform = (props) => {
  return (
    <div className="col-md-6 d-flex flex-column z-2">
    {/* Carrossel de imagens */}
    <Caroucel imagem={props.imagem} />
    <div className="my-3">
      <button className="btn text-light d-flex gap-2 buttons">
        <i className="bi bi-plus"></i>
        <span>Lista de Desejos</span>
      </button>
    </div>
    <GameValor handleAddCarrinho={props.handleAddCarrinho} jogo={props.jogo} />
  </div>
  )
}

export default SideleftDescrInform