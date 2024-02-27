import styled from 'styled-components'
import {Titulo} from '../titulo'
import {Subtitulo} from '../titulo'
import {Descricao} from '../descricao'

const Card = styled.div`
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 30px auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`

const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`

function CardRecomenda({titulo, subtitulo, descricao, imgSrc}) {
    return (
        <Card>
            <div>
                <Titulo tamanhoFonte="25px" cor="red">{titulo}</Titulo>
                <Subtitulo>{subtitulo} 11</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <img src={imgSrc} />
                <Botao>Saiba mais</Botao>
            </div>
        </Card>
    )
}

export default CardRecomenda