import styled from 'styled-components';
import background from '@/assets/img/services-bg.jpg'

export const Section2Wrapper = styled.div`
  position:relative;
  background: url(${background}) no-repeat center;
  background-attachment: fixed;

  .skills{
    display:flex;
    justify-content:space-evenly;
    position:absolute;
    top:40%;
    left:50%;
    transform:translateX(-50%);
    min-width:1200px;
  }
`