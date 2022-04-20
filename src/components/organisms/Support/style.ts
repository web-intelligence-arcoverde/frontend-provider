import { COLORS } from 'src/common'
import styled from 'styled-components'

export const H2 = styled.h2`
  color: ${COLORS.white};
  margin-top: 30px;
  text-transform: uppercase;
  font-size: 44px;
`
export const Triangle = styled.h1`
  background: ${COLORS.white};
  border-top: 20px solid transparent;
  border-left: 40px solid ${COLORS.blue};
  border-right: 40px solid ${COLORS.blue};
`

export const Number = styled.h1`
  color: ${COLORS.white};
  font-size: 64px;
  font-weight: bolder;
`
export const Days = styled.p`
  color: ${COLORS.white};
`
