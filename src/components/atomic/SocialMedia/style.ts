import styled from 'styled-components'

export const CardImgs = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const Img = styled.img`
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 15%;
  background-color: #2f2f2f;
  cursor: pointer;
  filter: grayscale(100%);

  :hover {
    filter: grayscale(0);
  }
`
