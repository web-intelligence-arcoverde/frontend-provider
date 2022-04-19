import React from 'react'
import { Button } from 'src/components/atomic/Button/Button'
import { Container } from '../../../styles/global'
import { ImgContainer, Divider } from './style'

const About = () => {
  return (
    <Container direction="row">
      <Container width="60%">
        <Container align="flex-start" width="40%">
          <h1>About</h1>
          <Divider />
          <p>
            You can check out our portfolio and see the results of our work. Our
            company has a great history and experience that was gained by the
            years of our company’s existence. Our wide range of services and
            equipment will beat the competing ones.
          </p>
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
