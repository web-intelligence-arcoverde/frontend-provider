import CardService from 'src/components/molecules/CardService'
import { Container } from 'src/styles/global'
import { CardTitle, Line } from './style'

const OurService = () => {
  return (
    <Container>
      <CardTitle>
        <Line />
        <h1>
          <span>Nossos</span> Serviços
        </h1>
        <Line />
      </CardTitle>
      <div>
        <CardService />
      </div>
    </Container>
  )
}

export default OurService
