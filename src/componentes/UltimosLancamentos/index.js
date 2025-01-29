import { livros } from './DadosUltimosLancamentos'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-botton: 20px;
    display: flex;
    
`

const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFFFFF;
    color: #EB9B00;
    justify-content: center;
    cursor: pointer;
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
            <Titulo>Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                {livros.map( livro => (
                    <img src={livro.src} alt={livro.nome}></img>
                ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos