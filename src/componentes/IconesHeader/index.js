import Perfil from '../../imagens/perfil.svg'
import Sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    cursor: pointer;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const icones = [Perfil, Sacola]

function IconesHeader(){
    return(
        <Icones>
            { icones.map((icone) => (
                <Icone>
                    <img 
                        src={icone}
                        alt={icone.toString}>
                    </img>
                </Icone>
            ) ) }
        </Icones>
    )
}

export default IconesHeader