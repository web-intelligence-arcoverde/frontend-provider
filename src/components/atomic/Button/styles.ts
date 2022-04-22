import { COLORS } from 'src/common'
import styled from 'styled-components'

interface ButtonProps {
  background?: string
  color?: string
}

export const CardButton = styled.button<ButtonProps>`
  cursor: pointer;
  width: 250px;
  background: ${({ background }) => (background ? COLORS.blue : COLORS.white)};
  color: ${({ color }) => (color ? COLORS.white : COLORS.black)};
  font-size: 16px;
  padding: 20px 30px;
  border-radius: 30px;
  outline: none;
  border: none;
  margin-top: 20px;
  transition: 1s;
  font-weight: 600;
  :hover {
    background-color: #1a1a1ab3;
    color: ${COLORS.white};
  }
`
