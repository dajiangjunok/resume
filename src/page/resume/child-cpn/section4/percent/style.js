import styled from 'styled-components';

export const PercentWrapper = styled.div`
  position:relative;
  text-align:center;
  width:120px;
  /* ${props => console.log(props.project)} */

  .circle-wrap,
  .circle-wrap .percent,
  .wrap-box {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .circle-wrap {
    border: 10px solid #ddd;
    position: absolute;
    clip: rect(0, 120px, 120px, 50px);
    /* 需要显示出来的全部*/
  }

  .circle-wrap.clip-auto {
    clip: rect(auto, auto, auto, auto);
  }

  .circle-wrap .percent {
    position: absolute;
    left: -10px;
    top: -10px;
    border: 10px solid #2c3e50;
  }

  .circle-wrap .left-clip {
    transform:rotate(45deg);
    clip: rect(${props => 160 - (props.project / 100) * 120}px 120px 120px 0);
     
    /* 需要显示出来的左边*/
    transition: transform ease;
  }

  .circle-wrap .right-clip {
    clip: rect(0, 120px, 120px, 60px);
    /* 需要显示出来的右边*/
  }

  .circle-wrap .right-clip.widt0 {
    width: 0;
  }

  .circle-num {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100px;
    height: 100px;
    background: #fff;
    z-index: 1;
    line-height: 100px;
    border-radius: 50%;
  }

  .circle-num span {
    font-size: 30px;
    color: #0c4b62;
    margin-right: 3px;
  }
  .ptitle {
  color: #E87E04;
  margin: 2em 0 1em;
  font-size: 16px;
  font-family: "SimHei";
  text-align: center;
}
 

`