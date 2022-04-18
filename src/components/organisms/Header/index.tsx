import React from 'react'
import NavHeader from 'src/components/molecules/NavHeader'
import Slide from '../../molecules/Slide'

import Top from 'src/components/molecules/Top'
import { Container } from './style'

const Header: React.FC = () => {
  return (
    <Container>
      <Top />
      <NavHeader />
      <Slide />
    </Container>
  )
}

export default Header
