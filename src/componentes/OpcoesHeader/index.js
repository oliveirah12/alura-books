import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

const Opcao = styled.ul`
  display: flex;
`

const Opcoes = styled.li`
  min-width: 120px;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`


const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader(){
    return(
      <Opcoes>
        { textoOpcoes.map((texto) => (
          <Link to={`${texto.toLowerCase().replaceAll(' ', '_')}`}>
            <Opcao><p>{texto}</p></Opcao>
          </Link> 
        ) ) }
      </Opcoes>
    )
}

export default OpcoesHeader