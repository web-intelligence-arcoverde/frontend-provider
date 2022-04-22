import CardService from 'src/components/molecules/CardService'
import { Container } from 'src/styles/global'
import { Title, Line, MiniContainer } from './style'

const OurService = () => {
  return (
    <Container id="services" responsive>
      <Title>
        <Line />
        <h1>
          <span>Nossos</span> Serviços
        </h1>
        <Line />
      </Title>
      <MiniContainer>
        <CardService />
      </MiniContainer>
    </Container>
  )
}

export default OurService
