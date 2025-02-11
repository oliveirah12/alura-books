import styled from "styled-components";

export const Titulo = styled.h2`
    margin: 0px;
    cursor: pointer;
    width: 100%;
    padding: 30px 0;
    background-color: #FFFFFF;
    color: ${props => props.cor || '#EB9B00'};
    font-size: ${props => props.tamanhoFonte || '24px'};
    text-align: ${props => props.alinhamento || 'center'};
` 