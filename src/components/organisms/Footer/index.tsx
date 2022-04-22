import React from 'react'
import { COLORS } from 'src/common'
import { SocialMediaWhiteIcons } from '../../../assets/index'
import { Container } from '../../../styles/global'
import { SocialMedia, Copyright } from './style'

const anoAtual = new Date().getFullYear()

const Footer = () => {
  return (
    <Container height="20vh" background={COLORS.black} responsive>
      <SocialMedia>
        {SocialMediaWhiteIcons.map(media => (
          <a href={media.hrf}>
            <img src={media.icon} alt={media.alt} />
          </a>
        ))}
      </SocialMedia>
      <Copyright>&copy; copyright {anoAtual} | all rights reserved</Copyright>
    </Container>
  )
}

export default Footer
