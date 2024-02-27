import React from "react";
import perfil from '../../img/perfil.svg'
import bag from '../../img/sacola.svg'
import styled from 'styled-components'

const icons = [perfil, bag]

const Icons = styled.ul`
  display: flex;
  align-items: center;
`

const Icon = styled.li`
  width: 25px;
  margin-right: 40px;
`

function HeaderIcons() {
    return (
        <Icons>
        {
          icons.map( (icon) => (
            <Icon><img src={icon} alt="perfil"></img></Icon>
          ))
        }
        </Icons>
    )
}

export default HeaderIcons