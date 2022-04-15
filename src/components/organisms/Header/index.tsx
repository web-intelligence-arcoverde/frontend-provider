import React from 'react'
import NavHeader from 'src/components/molecules/NavHeader'
import SlideSection from 'src/components/molecules/Slide'
import Top from 'src/components/molecules/Top'
import { Container } from './style'

const Header: React.FC = () => {
  return (
    <Container>
      <Top />
      <NavHeader />
      <SlideSection />
    </Container>
  )
}

export default Header
