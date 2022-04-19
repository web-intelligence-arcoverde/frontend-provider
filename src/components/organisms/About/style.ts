import { COLORS } from 'src/common'
import styled from 'styled-components'

export const ImgContainer = styled.div`
  width: 40%;
  min-width: 900px;
  height: 100vh;
  background-image: url(https://livedemo00.template-help.com/wt_57837/images/page-1_img01.jpg);
  background-size: contain;
  background-repeat: no-repeat;
`

export const Divider = styled.div`
  border-bottom: 4px solid ${COLORS.blue};
  width: 45px;
  margin-bottom: 60px;
`
