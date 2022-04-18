import React from 'react'
import { Button } from 'src/components/atomic/Button/Button'
import { PartnersLogo } from 'src/assets'
import { Container, DividerContainer, PartnersLogoContainer } from './style'

const Partners = () => {
  return (
    <Container>
      <h1>Parceiros</h1>
      <DividerContainer />
      <p>
        Valorizamos nossos parceiros e acreditamos que nosso programa de
        parceria é uma ferramenta de negócios muito eficaz que abre muitas
        vantagens para seus participantes. Em primeiro lugar, assumimos que esse
        projeto é uma ótima maneira de compartilhar experiências comuns,
        discutir problemas importantes e fazer brainstorming.
      </p>
      <PartnersLogoContainer>
        {PartnersLogo.map(logo => (
          <img src={logo.icon} alt="*" />
        ))}
      </PartnersLogoContainer>
      <Button
        children="Explore Mais"
        onClick={(): void => {
          window.scrollTo(0, 0)
        }}
      />
    </Container>
  )
}

export default Partners
