import { COLORS } from 'src/common'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 110vh;
  color: ${COLORS.white};
  background: ${COLORS.blue};
  h1 {
    font-size: 54px;
    line-height: 50px;
  }
  p {
    width: 80%;
    font-size: 20px;
    margin-bottom: 40px;
  }
  button {
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
    :hover{
      background-color: #1a1a1ab3;
      color:${COLORS.white}
    }
  }
  @media (max-width: 769px) {
    height: auto;
    padding: 20px 0;
    p{
      padding: 0 10%;
    }
  }
`
export const DividerContainer = styled.div`
  border-bottom: 4px solid ${COLORS.white};
  width: 2%;
  margin: 10px 0 80px 0;
`
export const PartnersLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
  img {
    width: 100px;
    height: 100px;
    :hover {
      opacity: 0.5;
    }
  }
  margin-bottom: 55px;
`
