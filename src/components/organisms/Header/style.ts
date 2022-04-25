import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-bottom: 100px;
  @media (max-width: 769px) {
    margin: 0;
    width: 100%;
    height: 90vh;
  }
`
