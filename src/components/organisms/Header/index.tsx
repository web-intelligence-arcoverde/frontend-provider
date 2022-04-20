import React from 'react'
import NavHeader from 'src/components/molecules/NavHeader'
import Slide from '../../molecules/Slide'

import Top from 'src/components/molecules/Top'
import { Container } from './style'
import NavMobile from 'src/components/molecules/NavMobile'

const Header: React.FC = () => {
  return (
    <Container>
      <Top />
      <NavMobile />
      <NavHeader />
      <Slide />
    </Container>
  )
}

export default Header
