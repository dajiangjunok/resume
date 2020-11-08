import React, { memo, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Section1Wrapper } from './style';

import JHeaderBar from '../../header-bar';
import JSectionTitle from '@/component/section-title';
import headerImg from '@/assets/img/mypic.jpg';
import weiImg from '@/assets/img/weixin.jpg';
import qrcode from '@/assets/img/qrcode.jpg'

import { ScrollTop } from '@/utils/scroll'

export default memo(function JSection1 () {
  const [isTop, setisTop] = useState(false);
  const [isWx, setisWx] = useState(false);
  const refHeader = useRef();

  const screenHandle = (e) => {
    const header = refHeader.current;
    const flag = header.clientHeight < (document.documentElement.scrollTop + 100)
    setisTop(flag)
  }

  const backTop = () => {
    ScrollTop(0, 500)
  }

  const wxHandle = () => {
    setisWx(true);
  }
  const closeWx = () => {
    setisWx(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', screenHandle)
    return () => {
      window.removeEventListener('scroll', screenHandle)
    };
  }, [])

  return (
    <Section1Wrapper className="section" ref={refHeader}>
      <JHeaderBar isTop={isTop} />
      <JSectionTitle title="关于我" />
      <img className="header-img" src={headerImg} alt="头像"></img>
      <div className="introduce">
        <p>我叫王勇杰，25岁，坐标杭州，是一名前端工程师。前端像一碗蛋炒饭，看似简单易做，实则学问颇深，只有将html , css , js 融会贯通才能做出一份香喷喷的炒饭。
学习的路还很长，志同道合的朋友可以加我，一起进步。</p>
        <p>有一起不断学习前端的小伙伴欢迎加我的微信
          <img src={weiImg} className="wei-img" alt="微信" onClick={wxHandle} />
          qq779503577</p>
        <p>此简历用React重构，之前的是jquery版本，需要对应源码加我微信多多交流，相互鼓励</p>
      </div>
      {
        isWx && (
          <CSSTransition
            in={isWx}
            timeout={2000}
            appear={true}
            classNames="fade"
          >
            <div className="qrcode-container">
              <i className="iconfont icon-guanbi" onClick={closeWx}></i>
              <img className="qrcode" src={qrcode} alt="微信二维码" />
            </div>
          </CSSTransition>
        )
      }
      {
        isTop && <div className="back-top" onClick={backTop}>
          <i className="iconfont icon-shangjiantou"></i>
        </div>
      }
    </Section1Wrapper>
  )
})
