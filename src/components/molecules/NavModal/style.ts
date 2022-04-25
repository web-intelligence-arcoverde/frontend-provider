import styled from 'styled-components'
import { COLORS } from 'src/common'

export const NavigationModal = styled.ul`
  position: fixed;
  top: 67px;
  left: 0;
  width: 55%;
  z-index: 20;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};
  height: 90vh;
  gap: 30px;
  padding-top: 30px;
  -webkit-box-shadow: 0px -3px 11px -2px rgba(82, 82, 82, 0.46);
  box-shadow: 0px -3px 11px -2px rgba(82, 82, 82, 0.46);
  animation: show 1s forwards;

  @keyframes show {
    from {
      opacity: 0.5;
      transform: translate3d(-40%, 0, 0);
    }
    to {
      opacity: 1;
      transform: rotate3d(0, 0, 0);
    }
  }
  a {
    text-decoration: none;
    color: ${COLORS.black};
    cursor: pointer;
    :hover {
      color: ${COLORS.blue};
    }
  }
`
