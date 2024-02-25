import Logo from '../logo'
import HeaderOptions from '../headerOptions'
import HeaderIcons from '../headerIcons'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <HeaderOptions/>
            <HeaderIcons/>
        </HeaderContainer>
    )
}

export default Header