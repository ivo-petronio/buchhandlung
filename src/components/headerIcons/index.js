import './style.css'

import perfil from '../../img/perfil.svg'
import bag from '../../img/sacola.svg'

const icones = [perfil, bag]

function HeaderIcons() {
    return (
        <ul className='icons'>
        {
          icones.map( (icon) => (
            <li className='icon'><img src={icon} alt="perfil"></img></li>
          ))
        }
        </ul>
    )
}

export default HeaderIcons