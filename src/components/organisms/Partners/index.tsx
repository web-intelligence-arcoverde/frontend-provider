import React from 'react'
import { Button } from 'src/components/atomic/Button/Button'
import { PartnersLogo } from 'src/assets'
import { Container, DividerContainer, PartnersLogoContainer } from './style'

const Partners = () => {
  return (
    <Container>
      <h1>Partners</h1>
      <DividerContainer />
      <p>
        We value our partners and believe that our program of partnership is
        very effective business tool that opens many advantages for its
        participants. First of all, we assume that such project is a great way
        to share common experience, discuss important problems, and brainstorm.
      </p>
      <PartnersLogoContainer>
        {PartnersLogo.map(logo => (
          <img src={logo.icon} alt="*" />
        ))}
      </PartnersLogoContainer>
      <Button
        title="Explore More"
        onClick={(): void => {
          window.scrollTo(0, 0)
        }}
      />
    </Container>
  )
}

export default Partners
