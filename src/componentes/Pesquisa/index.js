import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './DadosPesquisa'



const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    align-items: center;
    width: 33%;
    flex-direction: column;
    gap: 0px;


    &:hover {
        border: 1px solid orange
    }
`

const ListaResultados = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    padding: 40px 0px;
    justify-content: center;
    

    p {
        color: black;
        margin: 0px;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu Livro em nossa estante</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(
                        livro => livro.nome.includes(textoDigitado)
                    )
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            <ListaResultados>
                {livrosPesquisados.map(livro => (
                    <Resultado>
                        <img src={livro.src} alt={livro.nome}/>
                        <p>{livro.nome}</p>
                    </Resultado>
                ))}
            </ListaResultados>
        </PesquisaContainer>
    )
}

export default Pesquisa