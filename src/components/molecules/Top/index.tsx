import SocialMedia from 'src/components/atomic/SocialMedia'

import { CardIcons, Contact, Container } from './style'

const Top = () => {
  return (
    <Container id="home">
      <Contact>
        <p>
          Phone: <a href="google.com">(87) 9999-9999</a>
        </p>
        <p>|</p>
        <p>
          Email: <a href="google.com">example@example.com</a>
        </p>
      </Contact>
      <CardIcons>
        <SocialMedia />
      </CardIcons>
    </Container>
  )
}

export default Top
