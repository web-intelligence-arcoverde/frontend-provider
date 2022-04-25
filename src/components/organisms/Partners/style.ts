import { COLORS } from 'src/common'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80vh;
  color: ${COLORS.white};
  background: ${COLORS.PRIMARY_COLOR};
  h1 {
    font-size: 54px;
    line-height: 50px;
    @media (max-width: 769px) {
      font-size: 33px;
      margin-top: 40px;
      line-height: 30px;
    }
  }
  p {
    width: 80%;
    font-size: 20px;
    margin-bottom: 40px;
  }

  @media (max-width: 769px) {
    height: auto;
    padding: 20px 0;
    p {
      width: 100%;
      padding: 0 10%;
      font-size: 16px;
    }
  }
`
export const DividerContainer = styled.div`
  border-bottom: 4px solid ${COLORS.white};
  width: 5%;
  margin: 10px 0 80px 0;
  @media (max-width: 769px) {
    width: 15%;
    margin: 0;
    margin-bottom: 50px;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: show 1s forwards;
  @keyframes show {
    from {
      opacity: 0.1;
      transform: translate3d(0, 40%, 0);
    }
    to {
      opacity: 1;
      transform: rotate3d(0, 0, 0);
    }
  }
`
export const PartnersLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;

  img {
    width: 100px;
    height: 100px;
    margin: 30px;
    :hover {
      opacity: 0.5;
    }
    @media (max-width: 769px) {
      width: 75px;
      height: 75px;
    }
  }
  margin-bottom: 55px;
`
