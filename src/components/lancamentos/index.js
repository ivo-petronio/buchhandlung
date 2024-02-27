import {livros} from './dadosLancamentos'
import {Titulo} from '../titulo'
import styled from 'styled-components'
import CardRecomenda from '../cardRecomenda'
import imgLivroRecomenda from '../../img/livro2.png'

const LancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;

    img {
        height: 200px;
        margin-right: 35px;
        transition: .5s;

        &:hover {
            transform: scale(1.2);
        }
    }
`

function Lancamentos({titulo, subtitulo, descricao, imgSrc}) {
    return (
        <LancamentosContainer>
            <Titulo>CONFIRA OS LANÇAMENTOS</Titulo>
                <NovosLivrosContainer>

                    {livros.map( livro => (
                        <img src={livro.src} />
                    ))}

                </NovosLivrosContainer>
                <CardRecomenda
                    titulo="Talvez você se interesse por:"
                    subtitulo="The Landmark Dictionary (En-Pt)"
                    descricao="Edição revisada e atualizada"
                    imgSrc={imgLivroRecomenda}
                />
        </LancamentosContainer>
    )
}

export default Lancamentos