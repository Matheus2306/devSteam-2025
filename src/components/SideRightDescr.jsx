import React from 'react'
import MarcadorCategoria from './MarcadorCategoria'

const SideRightDescr = (props) => {
  return (
    <div className="col-md d-flex flex-column z-2">
            <div>
              <img src={props.primeiraImagem} className="img-fluid w-100" alt="" />
            </div>
            <div className="text-light h5 mt-3">
              <p>{props.descricao || "Descrição do jogo"}</p>
              <div className="text-secondary d-flex flex-column gap-2">
                <span>
                  Análises Recentes: {props.analisesRecentes || "analise"}
                </span>
                <span>Todas as Análises: {props.analises || "analise"}</span>
                <span>
                  Data de Lançamento: {props.dataLancamento || "Data"}
                </span>
                <span>Desenvolvedor: {props.desenvolvedor || "xxx"}</span>
                <span>Distribuidora: {props.distribuidora || "xxx"}</span>
                <div className="d-flex flex-column gap-2">
                  <span>Marcadores populares para esse produto:</span>
                  <div className="d-flex flex-wrap gap-2">
                    {props.Arraycate.map((categoria, index) => (
                      <MarcadorCategoria key={index} categoria={categoria} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default SideRightDescr