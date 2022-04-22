import styled from 'styled-components'

export const Navigation = styled.div`
  display: none;

  @media (max-width: 769px) {
    display: flex;
    padding: 10px;
    -webkit-box-shadow: 0px 4px 15px -4px rgba(0, 0, 0, 0.83);
    box-shadow: 0px 4px 15px -4px rgba(0, 0, 0, 0.83);
    position: fixed;
    top:0;
    width: 100%;
    background-color: #fff;
    z-index: 33;
  }
`

export const Default = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  gap: 12px;
  h2 {
    margin-top: 8px;
  }
`
