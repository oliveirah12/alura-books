import styled from 'styled-components'
import Pesquisa from '../../componentes/Pesquisa';

const AppContainer = styled.div
`
  width: 100vw;
  height: 100vh;
  
`

export function Favoritos(){
    return(
        <AppContainer>
            <Pesquisa/>
        </AppContainer>
    )
}