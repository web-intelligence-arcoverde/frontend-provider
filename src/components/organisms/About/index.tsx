import React from 'react'
import { Button } from 'src/components/atomic/Button/Button'
import { useInView } from 'react-intersection-observer'
import { Container } from '../../../styles/global'
import { ImgContainer, Divider, Describe, TextContainer } from './style'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  })
  return (
    <Container direction="row" id="about">
      <Container ref={ref} width="60%">
        {inView === true ? (
          <TextContainer>
            <h1>Sobre</h1>
            <Divider />
            <Describe>
              Você pode conferir nosso portfólio e ver os resultados do nosso
              trabalho. Nossa empresa tem uma grande história e experiência que
              foi adquirida pelos anos de existência da nossa empresa. Nossa
              ampla gama de serviços e equipamentos superará os concorrentes.
            </Describe>
            <Button
              color
              background
              onClick={(): void => {
                window.scrollTo(0, 0)
              }}
            >
              Explore Mais
            </Button>
          </TextContainer>
        ) : null}
      </Container>
      <ImgContainer />
    </Container>
  )
}

export default About
