import styled from 'styled-components';

export const ExperienceWrapper = styled.div`
display:flex;
  width:600px;
  height:150px;
  
  p{
      margin-block-start: 0;
      margin-block-end: 0;
    }

  .time{
    display:flex;
    position:relative;
    flex-direction:column;
    justify-content:space-evenly;
    flex:1;
    padding:20px 0;
    max-width:150px;
    background-color: #fff;
    border-radius:50%;
    text-align:center;
    color:#787978;
    font-size:16px;
    font-weight: bold;
    border:1px solid #eee;
    box-sizing: border-box;

    .line{
      position:absolute;
      left:50%;
      transform:translateX(-50%);
      top:-32px;
      height:30px;
      width:2px;
      background-color: #ccc;
    }
  }
  .content{
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    padding:10px 0 0 10px; 
    box-sizing:border-box;
    flex:2;
     
    .title{
      color: #626e7c;
      font-size: 16px;
      font-weight: bold;
    }
    .name{
      color: #E87E04;
      font-size: 16px;
      font-family: "SimHei";
    }
    .msg{
      font-size:14px;
      color:#787978;
    }
}
`