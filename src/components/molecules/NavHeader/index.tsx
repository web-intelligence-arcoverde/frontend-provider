import React from 'react'

import { Container, NavContainer } from './style'

const NavHeader: React.FC = () => {
  return (
    <Container>
      <h1>Web</h1>
      <h2>(87)92022440</h2>
      <NavContainer>
        <li>
          <a href="dgdfg">Home</a>
        </li>
        <li>
          <a href="fsdf">About</a>
        </li>
        <li>
          <a href="fsdf">Services</a>
        </li>
        <li>
          <a href="fdsf">Gallery</a>
        </li>
        <li>
          <a href="gdfg">Contacts</a>
        </li>
      </NavContainer>
    </Container>
  )
}

export default NavHeader
