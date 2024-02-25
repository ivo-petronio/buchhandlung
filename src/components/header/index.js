import Logo from '../logo'
import HeaderOptions from '../headerOptions'
import HeaderIcons from '../headerIcons'

import './style.css'

function Header() {
    return (
        <header className='App-header'>
            <Logo/>
            <HeaderOptions/>
            <HeaderIcons/>
        </header>
    )
}

export default Header