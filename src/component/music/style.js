import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0%{
      transform:rotate(0deg);  
   }  
  
  100%{
     transform :rotate(360deg);

  }
`

export const MusicWrapper = styled.div`
  position:absolute;
  z-index:1;
  left:40px;
  top:40px;
  width:30px;
  height:30px;

  .music-img{
    width:100%;
    height:100%;
    cursor: pointer;
    animation: ${rotate} 10s ease-in-out 0s infinite;
  }
`
