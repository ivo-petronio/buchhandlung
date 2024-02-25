import Input from '../input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52, #326589);
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
    justify-content: center;
    margin-top: 40px;

    img {
        width: 100px;
    }

    p {
        width: 200px;
    }

    &:hover {
        box-shadow: 0 0 10px rgba(0, 255, 0, 0.4);
    }
`

function Pesquisa() {
    const [searchedBooks, setSearchedBooks] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
            <Input
                type="text"
                placeholder="O livro que eu quero é..."
                onBlur={(event => {
                    let searchParam = event.target.value
                    let searchResult = livros.filter(livro => livro.titulo.includes(searchParam))
                    if(!event.target.value) searchResult = []
                    setSearchedBooks(searchResult)
                })}
            />

            { searchedBooks.map( book => (
                <Resultado>
                    <img src={book.src} />
                    <p>{book.titulo}</p>
                </Resultado>
            )) }

        </PesquisaContainer>
    )
}

export default Pesquisa