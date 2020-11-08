import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  margin-bottom:20px;
  width:225px;
  height:225px;
  background:url(${props => props.img}) no-repeat center;
  transform:scale(${props => props.initailProject.scale});
  transition:transform 0.3s ease;
  cursor: pointer;

  .mask{
    display:${props => props.initailProject.display};
    position:relative;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,.6);
    color:#fff;

    .container{
      position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      text-align:center;

      p{
      margin-block-start: 0;
      margin-block-end: 10px;
     } 
    }

    .mask-title{
      font-size: 16px;
      font-weight: 600;
    }
    .mask-msg{
      color: #fff;
      font-size: 14px;
      text-align: center;
      margin: 10px 0;
      padding: 0 1em;
    } 

    .icon-sousuo{
      color:orange;
      font-weight: 800;
      font-size:30px;

    }
     
  }
`
