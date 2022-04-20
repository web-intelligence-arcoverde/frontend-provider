/* eslint-disable no-var */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import React from 'react'
import { COLORS } from 'src/common'
import { Container } from 'src/styles/global'
import Lottie from 'react-lottie'
import animationData from 'src/assets/animations/support.json'
import CountUp from 'react-countup'
import { H2, Number, Days, Triangle } from './style'

const Support = () => {
  // Animaçao lootie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  // Animaçao numeros
  var Numbersinfor = [
    { number: <CountUp end={7} />, name: 'Dias por semana' },
    { number: <CountUp end={31} />, name: 'Dias por mês' },
    { number: <CountUp end={365} />, name: 'Dias por ano' },
  ]

  return (
    <Container background={COLORS.blue}>
      <Triangle />
      <H2>um suporte que funciona</H2>
      <Container direction="row">
        <Container width="50%" height="auto">
          {Numbersinfor.map(data => (
            <div>
              <Number>{data.number}</Number>
              <Days>{data.name}</Days>
            </div>
          ))}
        </Container>{' '}
        <Lottie options={defaultOptions} height={500} width={600} />
      </Container>
    </Container>
  )
}

export default Support
