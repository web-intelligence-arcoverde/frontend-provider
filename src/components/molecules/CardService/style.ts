import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 25%;
  border: 1px solid #cccccc54 ;
  gap: 20px;
  box-shadow: 0px -4px 24px -5px rgba(179,173,179,0.42);
  img {
      width: 30px;
  }
  :hover{
    box-shadow: 0px 1px 26px -6px rgba(0,0,0,0.39);
  }
`;
