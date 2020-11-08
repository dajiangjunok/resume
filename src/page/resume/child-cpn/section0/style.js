import styled, { keyframes } from 'styled-components';

export const Section0Wrapper = styled.div`
  position:relative;
  overflow:hidden;
`
const move = keyframes`
  0%{
      transform:scale(1);  
   }  

   50%{
      transform:scale(1.2);  
   }   

  100%{
     transform :scale(1);

  }
`

export const ResumeMask = styled.div`
  position:absolute;
  z-index:-1;
  width:100%;
  height:100vh;
  ${props => { console.log(props.current_bg) }}
  background: url(${props => props.current_bg})  no-repeat center ;
  background-size: 100% 100%;
  opacity:.6;
  transition: all 2s ease;

  animation: ${move} 20s ease infinite;
`

export const WelcomeWrapper = styled.div`
  position:absolute;
  left:50%;
  top:50%;
  min-width:700px;
  transform:translate(-50%,-50%);
  font-size: 90px;
  font-family: cursive, 'Lato', sans-serif;
  font-weight: 600;
  text-shadow: 3px 3px 3px rgb(156, 154, 154);
  text-align: center;
  transition: transform 1s;
  color: #2C3E50;

  span.welcome{
    display:inline-block;
    min-width:40px;
    transition:all 1s ease;
    cursor: pointer;
    
    &:hover{
     color:#fff;
     transform: translateY(10px) rotate(5deg) scale(1.5);
    }
  }

  span.msg{
    font-family:'微软雅黑';
    font-size:40px;
    min-width:50px;
  }
`
