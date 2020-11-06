import styled from 'styled-components';

export const ResumeMask = styled.div`
  position:fixed;
  z-index:-999999;
  width:100%;
  height:100vh;
  background: url(${props => props.current_bg})  no-repeat center ;
  background-size: 100% 100%;
  opacity:.6;
  transition: all 2s ease;
`
export const WelcomeWrapper = styled.div`
  position:absolute;
  left:50%;
  top:40%;
  min-width:700px;
  transform:translate(-50%,-50%);
  font-size: 80px;
  font-family: cursive, 'Lato', sans-serif;
  font-weight: 600;
  text-shadow: 3px 3px 3px rgb(156, 154, 154);
  text-align:center;
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
  }
`

export const ResumeWrapper = styled.div`
  position:relative;
  overflow:hidden;
`
