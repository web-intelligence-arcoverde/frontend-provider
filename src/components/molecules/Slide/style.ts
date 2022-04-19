import styled, { keyframes } from 'styled-components'
import { COLORS } from 'src/common'

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`

export const Container = styled.div`
  .carousel-item {
    height: 100vh;
    animation: ${FadeInAnimation} 1s ease-in-out;
  }
  .carousel-item h3 {
    position: absolute;
    bottom: 350px;
    left: 20%;
    font-size: 30px;
  }
  .carousel-item p {
    position: absolute;
    bottom: 250px;
    width: 70%;
    left: 20%;
    font-size: 18px;
  }
  .carousel-indicators {
    display: none;
  }
`
export const CardButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 180px;
  gap: 15px;

  Button {
    :hover {
      background-color: ${COLORS.blue};
      color: ${COLORS.white};
    }
  }
`
