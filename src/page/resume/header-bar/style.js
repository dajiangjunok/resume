import styled from 'styled-components';

export const HeaderBarWarpper = styled.div`
  & > div{
    display:flex;
    align-items:center;
    left:0;
    top:0;
    width:100%;
    height:65px;
    background-color:#2c3e50;
  }

  .no-top{
    position:absolute;
    z-index:9;
    left:0;
    top:0px;
  }

  .top{
    position:fixed;
    z-index:9;
    left:0;
    top:0px;
  }

  .left{
    flex:1;
    padding-left:60px;
    a{
      font-size: 14px;
      font-weight: bold;
      line-height: 70px;
      color: #ffffff;
    }
  }

  .right{
    flex:5;
    padding-right:60px;
    text-align:right;

    span{
      padding:0 20px;
      font-size: 14px;
      line-height: 70px;
      color: #ffffff;
      cursor: pointer;

      &.active{
        color:#E87E04;
      }

      &:hover{
        color:#E87E04;
      }
    }
  }

`