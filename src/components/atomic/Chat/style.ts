import styled from 'styled-components'

export const CardChat = styled.a`
  position: fixed;
  bottom: 5%;
  right: 2%;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background-color: white;
  z-index: 40;
  cursor: pointer;
  @media (max-width: 769px) {
    display: none;
  }
  img {
    margin: 5px;
    margin-top: 8px;
    width: 50px;
  }
`
export const CardAnimation = styled.div`
  position: fixed;
  bottom: 5%;
  right: 2%;
  cursor: pointer;
`
