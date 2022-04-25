import { COLORS } from 'src/common'
import styled from 'styled-components'

export const H2 = styled.h2`
  color: ${COLORS.white};
  margin-top: 30px;
  text-transform: uppercase;
  font-size: 44px;
  @media (max-width: 769px) {
    font-size: 33px;
    text-align: center;
  }
`
export const Triangle = styled.h1`
  background: ${COLORS.white};
  border-top: 20px solid transparent;
  border-left: 40px solid ${COLORS.PRIMARY_COLOR};
  border-right: 40px solid ${COLORS.PRIMARY_COLOR};
`

export const Number = styled.h1`
  color: ${COLORS.white};
  font-size: 64px;
  font-weight: bolder;
`
export const Days = styled.p`
  color: ${COLORS.white};
`

export const LottieCard = styled.h5`
  width: 500px;
  height: 400px;
  @media (max-width: 769px) {
    width: 358px;
    height: 300px;
  }
`
export const H5 = styled.h5`
  color: ${COLORS.white};
  @media (max-width: 769px) {
    width: 350px;
    text-align: center;
    margin-bottom: 50px;
    font-size: 18px;
  }
`
