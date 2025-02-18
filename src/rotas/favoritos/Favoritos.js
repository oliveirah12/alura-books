import { useEffect, useState } from 'react'
import { deleteFavorito, getFavoritos } from '../../servicos/favoritos'
import { Titulo }  from './../../componentes/Titulo'
import LivroImage from '../../imagens/livro.png'
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`
const FavoritosContainer = styled.div`
    width: 100vw;
    height: 50vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
    display: flex;

`
const ItensFavoritos = styled.div`
    margin: 5px;
    height: 80%;
    width: 20%;
    border: 2px;
    margin: 5px;
    border-color: black;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 2px solid black;
    padding: 5px;
    text-align: center;
    cursor: pointer;

    &:hover {
        border: 1px solid white;
    }
`


export function Favoritos(){
    const [favoritos, setFavoritos] = useState([])

    async function fetchFavoritos(){
        const favoritosAPI = await getFavoritos()
        setFavoritos(favoritosAPI)
    }
    async function deletarFavorito(id) {
        await deleteFavorito(id)
        await fetchFavoritos()
        alert('Livro desfavoritado')
    }

    useEffect(() => {
        fetchFavoritos()
    }, [])



    return(
        <AppContainer>
            <Titulo tamanhoFonte = '30px'>Seus Favoritos</Titulo>
            <FavoritosContainer>
                {favoritos.map( favorito => (
                    <ItensFavoritos onClick={() => deletarFavorito(favorito.id)}>
                        <img src={LivroImage} alt={`${favorito.nome}`}>
                        </img> {favorito.nome}
                    </ItensFavoritos>
                ))}
            </FavoritosContainer>
        </AppContainer>
    )
}