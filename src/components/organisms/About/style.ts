import { COLORS } from 'src/common'
import styled from 'styled-components'

export const ImgContainer = styled.div`
  width: 40%;
  height: 100vh;
  background-image: url(https://livedemo00.template-help.com/wt_57837/images/page-1_img01.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 769px) {
    display: none;
  }
`

export const Divider = styled.div`
  border-bottom: 4px solid ${COLORS.blue};
  width: 45px;
`

export const TextContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 769px) {
    text-align: start;
    margin: 150px 0 50px 0;
    width: 90%;
    height: auto;
  }
`
export const Describe = styled.p`
  font-size: 20px;
  margin: 60px 0;
  @media (max-width: 769px) {
    margin: 40px 0 30px 0;
    font-size: 17px;
    width: 100%;
  }
`
