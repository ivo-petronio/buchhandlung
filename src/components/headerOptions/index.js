import './style.css'

const menuOptions = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']

function HeaderOptions() {
    return (
        <ul className='options'>
          {
            menuOptions.map( (item) => (
              <li className='option'><p>{item}</p></li>
            ))
          }
        </ul>
    )
}

export default HeaderOptions