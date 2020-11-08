import React, { memo, useState, useEffect } from 'react';

import { Section0Wrapper, ResumeMask, WelcomeWrapper } from './style';

import JMarker from '@/component/marker';
import JSpeedBar from './speed-bar';

// 导入所有背景
import bg1 from '@/assets/img/bg1.jpg';
import bg2 from '@/assets/img/bg2.jpg';
import bg3 from '@/assets/img/bg3.jpg';
import bg4 from '@/assets/img/bg4.jpg';

export default memo(function JSection0 () {
  const toLink = {
    title: '我的博客',
    link: '/blog'
  }
  const initialState = {
    title: `Hello,I'm Wyj`,
    msg: `一个热爱技术的前端码农`,
    speedList: ['关于我', '我的作品', '我的简历']
  }

  const [bgList] = useState([bg1, bg2, bg3, bg4]);
  const [timer, settimer] = useState(null);
  const [current_bg, setcurrent_bg] = useState(bg1);

  useEffect(() => {
    let index = 0;
    settimer(setInterval(() => {
      index++;
      if (index > 3) {
        index = 0
      }
      setcurrent_bg(bgList[index])
    }, 8000))
    return () => {
      clearInterval(timer);
      settimer(null);
    }
  }, [bgList, timer])

  return (
    <Section0Wrapper className="section" id="resume_section0" >
      <JMarker toLink={toLink} />
      <ResumeMask current_bg={current_bg} />
      <WelcomeWrapper>
        <div>
          {
            Array.from(initialState.title).map((item, index) => {
              return <span key={index} className="welcome">{item}</span>
            })
          }
        </div>
        <div>
          {
            Array.from(initialState.msg).map((item, index) => {
              return <span key={index} className="welcome msg">{item}</span>
            })
          }
        </div>
        <JSpeedBar speedList={initialState.speedList} />
      </WelcomeWrapper>
    </Section0Wrapper>
  )
})
