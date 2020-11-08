import React, { memo } from 'react';
import { Section3Wrapper } from './style';

import JSectionTitle from '@/component/section-title';
import JProject from './project';

import bg1 from '@/assets/img/01.jpg'
import bg2 from '@/assets/img/02.jpg'
import bg3 from '@/assets/img/03.jpg'
import bg4 from '@/assets/img/04.jpg'
import bg5 from '@/assets/img/05.jpg'
import bg6 from '@/assets/img/06.jpg'
import bg7 from '@/assets/img/07.jpg'
import bg8 from '@/assets/img/08.jpg'

export default memo(function JSection3 () {
  const projects = [
    {
      img: bg1,
      title: '项目1',
      msg: '项目介绍1111'
    }, {
      img: bg2,
      title: '项目2',
      msg: '项目介绍222222'
    }, {
      img: bg3,
      title: '项目3',
      msg: '项目介绍333333333333'
    }, {
      img: bg4,
      title: '项目4',
      msg: '项目介绍444444'
    }, {
      img: bg5,
      title: '项目5',
      msg: '项目介绍555555'
    }, {
      img: bg6,
      title: '项目6',
      msg: '项目介绍666666'
    }, {
      img: bg7,
      title: '项目7',
      msg: '项目介绍77777'
    }, {
      img: bg8,
      title: '项目8',
      msg: '项目介绍888888'
    }
  ]
  console.log(projects);

  return (
    <Section3Wrapper className="section">
      <JSectionTitle title="作品集" />
      <p className="title">以下是空闲时候根据自己技术栈写的一些项目,我的宗旨是能手写就手写，不依赖插件。手写代码更简洁高效，也更能提升自己技术</p>
      <div className="project-container">
        {
          projects.map((item, index) => {
            return <JProject key={item.img} project={projects[index]} />
          })
        }
      </div>
    </Section3Wrapper>
  )
})
