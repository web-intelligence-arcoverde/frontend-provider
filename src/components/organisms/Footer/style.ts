import { COLORS } from 'src/common'
import styled from 'styled-components'

export const SocialMedia = styled.div`
  display: flex;
  gap: 10px;
  margin:  30px 0;
  img {
    width: 50px;
    height: 40px;
    padding: 10px;
    background: ${COLORS.black};
    border: 1;
    border: 1px solid ${COLORS.white};
    border-radius: 25px;
  }
`
export const Copyright = styled.h5`
  color: ${COLORS.white};

  @media (max-width:769px){
    font-size: 14px;
  }
`
