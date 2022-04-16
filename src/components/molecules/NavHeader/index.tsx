import React from 'react'
import { NavMock } from 'src/__mocks__/nav'
import { Container, NavContainer } from './style'

const NavHeader: React.FC = () => {
  return (
    <Container>
      <h1>Web</h1>
      <h2>(87)92022440</h2>
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
