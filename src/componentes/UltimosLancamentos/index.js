import { livros } from './DadosUltimosLancamentos'
import imagemLivro from '../../imagens/livro2.png'
import styled from 'styled-components'
import { Titulo } from './../Titulo'
import CardRecomenda from '../CardRecomenda'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos(){
    return (
        <UltimosLancamentosContainer>
            <Titulo tamanhoFonte="36px">Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                {livros.map( livro => (
                    <img src={livro.src} alt={livro.nome}></img>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Recomendação"
                subtitulo="Angular 11"
                descricao="Descricao de livro recomendado"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos