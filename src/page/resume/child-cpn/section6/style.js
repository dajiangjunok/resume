import styled from 'styled-components';
import background from '@/assets/img/achivements-bg.jpg'

export const Section6Wrapper = styled.div`
  position:relative;

  background: url(${background}) no-repeat center;
  background-attachment: fixed;

  .up{
    position:absolute;
    left:50%;
    top:30%;
    transform:translateX(-50%);
  }
`