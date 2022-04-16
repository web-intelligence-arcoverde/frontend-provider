import { COLORS } from 'src/common'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px;
  position: absolute;
  top: 5%;
  z-index: 2;
  width: 100%;
  color: ${COLORS.white};

  h2 {
    transition: 1s;
  
    margin-left: 400px;
    :hover {
      color: ${COLORS.blue};
    }
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
      color: ${COLORS.white};
    }
  }
`
