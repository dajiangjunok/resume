import React, { memo, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderBarWarpper } from './style';
import { ScrollTop } from '@/utils/scroll'

export default memo(function JHeaderBar (props) {
  const navList = ['关于我', '求职意向', '作品集', '技术掌握', '我的经历', '联系我'];
  const [currentIndex, setcurrentIndex] = useState(0)


  // other event
  const navClick = (e, index) => {
    // const st = document.documentElement.scrollTop || document.body.scrollTop;
    const currentScroll = (document.getElementById('resume_section0').clientHeight * (index + 1) + 10);
    ScrollTop(currentScroll, 500);
    setcurrentIndex(index);
  }

  const scorllFunc = () => {
    const st = document.documentElement.scrollTop || document.body.scrollTop;
    const oneHeight = document.getElementById('resume_section0').clientHeight;
    const index = Math.floor(st / oneHeight);

    if (currentIndex !== Math.floor(st / oneHeight)) {
      setcurrentIndex(index)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scorllFunc);
    return () => {
      window.removeEventListener('scroll', scorllFunc);
    }
  }, [])

  return (
    <HeaderBarWarpper >
      <div className={props.isTop ? "top" : "no-top"}>
        <div className="left">
          <NavLink to="/blog">我的博客</NavLink>
        </div>
        <div className="right">
          {
            navList.map((item, index) => {
              return <span key={index} className={(currentIndex - 1) === index ? 'active' : ''} onClick={e => navClick(e, index)}>{item}</span>
            })
          }
        </div>
      </div>
    </HeaderBarWarpper>
  )
})
