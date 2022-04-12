import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
    list-style: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`
interface ContainerProps {
  direction?: string
  justify?: string
  align?: string
  background?: string
  responsive?: string
  height?: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? 'row' : 'column')};
  justify-content: ${props => (props.justify ? props.justify : 'center')};
  align-items: ${props => (props.align ? props.align : 'center')};
  height: ${props => (props.height ? props.height : '100vh')};
  background: ${props => (props.background ? props.background : 'transparent')};
  @media (max-width: 769px) {
    flex-direction: ${({ responsive }) => (responsive ? 'column' : 'row')};
  }
`
