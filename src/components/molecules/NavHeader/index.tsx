import React from 'react'
import { NavMock } from 'src/__mocks__/nav'
import { Container, LogoWeb, NavContainer, Phone } from './style'
import { Icons } from 'src/assets'
import Logo from 'assets/icons/logoweb.svg'

const NavHeader: React.FC = () => {
  return (
    <Container>
      <LogoWeb src={Logo} alt="*" width="150px" />
      <Phone>
        <img src={Icons.phone} alt="phone" />
        <h5>(87)92022440</h5>
      </Phone>
      <NavContainer>
        {NavMock.map(item => (
          <li>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </NavContainer>
    </Container>
  )
}

export default NavHeader
