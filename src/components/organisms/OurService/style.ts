import styled from 'styled-components'
import { COLORS } from 'src/common'

export const Title = styled.div`
  display: flex;
  align-items: center;
  h1 {
    color: ${COLORS.PRIMARY_COLOR};
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    padding: 0 20px;
    @media (max-width: 769px) {
      border: none;
      margin-top: 50px;
    }
  }
  span {
    color: ${COLORS.black};
  }
`
export const Line = styled.div`
  height: 1px;
  background-color: ${COLORS.black};
  width: 100px;
  margin-bottom: 5px;
  @media (max-width: 769px) {
    display: none;
  }
`
export const MiniContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`
