import styled from 'styled-components'
import { COLORS } from 'src/common'

export const Container = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-between;
  background-color: ${COLORS.black};
  align-items: center;
  color: ${COLORS.gray};
  @media (max-width: 769px) {
    display: none;
  }
`

export const Contact = styled.div`
  display: flex;
  margin-left: 10%;
  margin-top: 20px;
  gap: 20px;
  text-align: center;
  a {
    color: ${COLORS.PRIMARY_COLOR};
  }
`
export const CardIcons = styled.div`
  margin-right: 10%;
`
