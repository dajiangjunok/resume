import styled from 'styled-components';

export const SpeedWrapper = styled.div`
    text-align:center;

  .speed-btn{
    display:inline-block;
    margin-right:20px;
    border:1px solid #fff;
    background-color: #2c3e50;
     width:150px;
    height:50px;
    line-height:50px;
    text-align:center;
    color:#fff;
    border-radius:5px;
    text-shadow:none;
    font-size:16px;
    font-weight:400;
    font-family:'微软雅黑';
    cursor: pointer;

  }

  .not-first{
    color:#2c3e50;
    background-color: #fff;
    border:1px solid #2c3e50;

    &:hover{
      color:#fff;
      background-color: #2c3e50;
      border:1px solid #fff;
    }
  }
`