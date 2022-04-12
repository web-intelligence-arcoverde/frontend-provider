import SocialMedia from 'src/components/atomic/SocialMedia'
import { Container } from 'src/styles/global'

const Top = () => {
  return (
    <Container height="30px">
      <div>
        <p>Phone:(87) 9999-9999</p>
        <p>|</p>
        <p>Email:example@example.com</p>
      </div>
      <div>
        <SocialMedia />
      </div>
    </Container>
  )
}

export default Top
