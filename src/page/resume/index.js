import React, { useState, useEffect } from 'react';
import { ResumeWrapper, ResumeMask, WelcomeWrapper } from './style';
import JMarker from '@/component/marker';

// 导入所有背景
import bg1 from '@/assets/img/bg1.jpg';
import bg2 from '@/assets/img/bg2.jpg';
import bg3 from '@/assets/img/bg3.jpg';
import bg4 from '@/assets/img/bg4.jpg';

export default function JResume () {
  const toLink = {
    title: '我的博客',
    link: '/blog'
  }
  const initialState = {
    title: `Hello,I'm Alger`,
    msg: `一个脑洞很大的前端工程师`
  }

  const [bgList] = useState([bg1, bg2, bg3, bg4]);
  const [timer, settimer] = useState(null);
  const [current_bg, setcurrent_bg] = useState(bg1)

  useEffect(() => {
    settimer(setInterval(() => {
      const index = parseInt((Math.random() * 4))
      setcurrent_bg(bgList[index])
    }, 5000))
    return () => {
      clearInterval(timer);
      settimer(null);
    }
  }, [bgList])

  return (
    <ResumeWrapper className="section">
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
      </WelcomeWrapper>
    </ResumeWrapper>
  )
}
