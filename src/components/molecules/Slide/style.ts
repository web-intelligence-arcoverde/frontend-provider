import styled from 'styled-components';
import { COLORS } from 'src/common';

export const Container = styled.div`
  
  .carousel-item{
      height: 100vh;
      
  }
.carousel-item h3{
      position: absolute;
      bottom: 350px;
      left: 45%;
  }
  .carousel-item p{ 
      position: absolute;
      bottom: 250px;
      left: 46%;
      
  }
  .carousel-indicators{
      display: none;
  }


`;
export const CardButton =styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
position: relative;
bottom: 180px;
gap: 15px;

Button{
    width:250px;
    height: 60px;
    border: none;
    border-radius: 40px;
    transition: 0.5s;
    :hover{
        background-color:${COLORS.blue} ;
        color:${COLORS.white}
    }
    
}
`