import styled from 'styled-components';

export const MarkerWrapper = styled.div`
  position:absolute;
  top:20px;
  right:-60px;
  padding:5px 0;
  width:200px;
  height:20px;
  color: #333;
  text-align:center;
  background-color: lightblue;
  transform:rotate(45deg);
  cursor: pointer;
  
  a{
    display:inline-block;
    width:100%;
    height:100%;
  }
`