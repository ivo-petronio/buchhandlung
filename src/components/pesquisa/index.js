import React from "react";
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
    position: relative;
    left: 70%;
    top: -40%;
    width: 200px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #002F52;
    transition: height .4s;

    img {
        width: 100px;
        transition: .5s;

        &:hover {
            transform: scale(1.1);
        }
    }

    p {
        width: 200px;
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
                onInput={(event => {
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