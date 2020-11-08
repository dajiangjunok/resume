import styled from 'styled-components';

export const Section1Wrapper = styled.div`
  position:relative;
  color:#787978;
  text-indent:20px;

  .header-img{
    position:absolute;
    left:50%;
    top:40%;
    transform:translate(-50%,-50%) rotate(-4deg);
    opacity:.9;
    width:200px;
    height:200px;
    border-radius:50%;
  }

  .introduce{
    position:absolute;
    left:50%;
    top:70%;
    width:80%;
    transform:translate(-50%,-50%)  ;
  }

  .wei-img{
    position: relative;
    display:inline-block;
    width: 24px;
    top: 8px;
    cursor: pointer;
  }

  .back-top{
    position:fixed;
    z-index: 1000;
    right: 20px;
    bottom:10%;
    width: 45px;
    height: 45px;
    background: #cccccc;
    border-radius: 5px;
    opacity: 0.6;
    cursor: pointer;

    &:hover{
      opacity: 0.8;
    }

    i{
      position:relative;
      right:12px;
      top:4px;
      font-size:30px;
      color:#fff;
    }  
  }

  .qrcode-container{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    opacity:1;
    text-align:center;

    .icon-guanbi{
      position:absolute;
      right:10px;
      top:10px;
      font-size:30px;
      opacity:.8;
      cursor: pointer;
    }
    .qrcode{
      width:300px;
    }
  }

  .fade-enter,
  .fade-appear {
    /* transform: translate(0, 0); */
    opacity:0;
    /* width:0 */
  }
  .fade-appear-active {
    /* transform: translate(80%, 0); */
    opacity:1;
    /* width:300px; */
    transition: all 1s ease;
  }
  .fade-enter-active {
    /* transform: translate(80%, 0); */
    opacity:1;
    /* width:300px; */
    transition: all 1s ease;
  }
  .fade-enter-done {
    /* transform: translate(80%, 0); */
    opacity:1;
    /* width:300px; */
  }
  .fade-exit {
    /* transform: translate(80%, 0); */
    opacity:1;
    /* width:300px; */
  }
  .fade-exit-active {
    /* transform: translate(0, 0); */
    /* opacity:0; */
    /* width:0; */
    transition: all 1s ease;
  }
   
 
 
`