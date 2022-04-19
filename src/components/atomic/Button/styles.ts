import { COLORS } from 'src/common'
import styled from 'styled-components'

export const CardButton = styled.button`
  cursor: pointer;
  width: 250px;
  background: ${COLORS.white};
  color: ${COLORS.black};
  font-size: 16px;
  padding: 20px 30px;
  border-radius: 30px;
  outline: none;
  border: none;
  margin-top: 20px;
  transition: 1s;
  :hover {
    background-color: #1a1a1ab3;
    color: ${COLORS.white};
  }
`
