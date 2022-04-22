import React from 'react'
import { Button } from 'src/components/atomic/Button/Button'
import { Container } from '../../../styles/global'
import { ImgContainer, Divider, Describe } from './style'

const About = () => {
  return (
    <Container id="about" direction="row">
      <Container width="60%">
        <Container responsive align="flex-start" width="60%">
          <h1>Sobre</h1>
          <Divider />
          <Describe>
            Você pode conferir nosso portfólio e ver os resultados do nosso
            trabalho. Nossa empresa tem uma grande história e experiência que
            foi adquirida pelos anos de existência da nossa empresa. Nossa ampla
            gama de serviços e equipamentos superará os concorrentes.
          </Describe>
          <Button
            background
            onClick={(): void => {
              window.scrollTo(0, 0)
            }}
          >
            Explore Mais
          </Button>
        </Container>
      </Container>
      <ImgContainer />
    </Container>
  )
}

export default About
