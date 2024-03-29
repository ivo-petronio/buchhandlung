import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import logo from '../../img/logo.svg'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImage = styled.img`
        margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt='logo-img' />
            <p><strong>Buchhandlung</strong></p>
        </LogoContainer>
    )
}

export default Logo