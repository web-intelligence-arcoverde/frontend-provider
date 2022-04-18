import { COLORS } from 'src/common'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 60px;
  position: absolute;
  top: 5%;
  z-index: 2;
  width: 100%;
  color: ${COLORS.white};

`
export const Phone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  filter: grayscale(70%);
    :hover{
      filter: grayscale(0%);
      color: ${COLORS.blue};
     
    }
  img {
    width: 25px;
    margin-bottom: 5px;
    
  }
  h5 {
    transition: 1s;
  }
`

export const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  li {
    transition: 1s;
    border-radius: 50px;
    padding: 12px 20px;
    :hover {
      background: ${COLORS.blue};
      color: ${COLORS.white};
    }
    a {
      font-size: 24px;
      text-decoration: none;
      color: ${COLORS.white};
    }
  }
`
