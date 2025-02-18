import Input from '../Input'
import styled from 'styled-components'
import LivroImage from '../../imagens/livro.png'
import { useEffect, useState } from 'react'
import { getLivros } from '../../servicos/livros'
import { postFavorito } from '../../servicos/favoritos'




const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 50px 0;
    height: 70vh;
    max-width: 100w;
    width: 100vw;
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

const ResultadoContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
`

const Resultado = styled.div`
    display: flex;
    align-items: center;
    max-width: 100vh;
    width: 33%;
    flex-direction: column;
    gap: 0px;
    cursor: pointer;

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
        color: gray;
        margin: 0px;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros()}, []
    )

    async function fetchLivros() {
        const livrosDaAPI = await getLivros()
        setLivros(livrosDaAPI)
    }

    async function insertFavorito(id){
        await postFavorito(id)
        alert('Livro favoritado')
    }

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
            <ResultadoContainer>
                <ListaResultados>
                    {livrosPesquisados.map( livro => (
                        <Resultado onClick={() => insertFavorito(livro.id)}>
                            <img src={LivroImage} alt={livro.nome}/>
                            <p>{livro.nome}</p>
                        </Resultado>
                    ))}
                </ListaResultados>
            </ResultadoContainer>
        </PesquisaContainer>
    )
}

export default Pesquisa