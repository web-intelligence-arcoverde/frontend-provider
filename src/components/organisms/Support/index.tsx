import React from 'react'
import { COLORS } from 'src/common'
import { Container } from 'src/styles/global'
import Lottie from 'react-lottie'
import animationData from 'src/assets/animations/support.json'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { H2, H5, Number, Days, Triangle, LottieCard } from './style'

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
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  })
  const Numbersinfor = [
    { number: <CountUp end={7} />, name: 'Dias por semana' },
    { number: <CountUp end={31} />, name: 'Dias por mês' },
    { number: <CountUp end={365} />, name: 'Dias por ano' },
  ]
  return (
    <Container ref={ref} responsive background={COLORS.PRIMARY_COLOR}>
      <Triangle />
      <H2>um suporte que funciona</H2>
      <Container responsive direction="row">
        <Container responsive width="50%" height="auto">
          {inView === true
            ? Numbersinfor.map(data => (
                <>
                  <Number>{data.number}</Number>
                  <Days>{data.name}</Days>
                </>
              ))
            : null}
        </Container>
        <Container responsive width="50%" height="auto">
          <LottieCard>
            <Lottie options={defaultOptions} />
          </LottieCard>
          <H5>
            Nosso suporte funciona! Não importa o dia, não te deixamos na mão.
          </H5>
        </Container>
      </Container>
    </Container>
  )
}

export default Support
