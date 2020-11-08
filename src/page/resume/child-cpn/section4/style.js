import styled from 'styled-components';
import background from '@/assets/img/skills-bg.jpg'

export const Section4Wrapper = styled.div`
  position:relative;

  background: url(${background}) no-repeat center;
  background-attachment: fixed;

  .percent-container{
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    flex-wrap:wrap;
    align-items:center;
    position:absolute;
    top:30%;
    left:50%;
    transform:translateX(-50%);
    min-width:1200px;
    height:400px;
  }
`