import logo from '../../img/logo.svg'
import './style.css'

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo' className="logo-img" />
            <p><strong>Buchhandlung</strong></p>
        </div>
    )
}

export default Logo