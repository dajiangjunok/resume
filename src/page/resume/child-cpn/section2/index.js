import React, { memo } from 'react';
import { Section2Wrapper } from './style';

import vue from '../../../../assets/img/vue.png';
import react from '../../../../assets/img/react.png';
import wx from '../../../../assets/img/wx.png';
import node from '../../../../assets/img/node.png';

import JSectionTitle from '@/component/section-title';
import JSkill from './skill';

const skills = [
  {
    img: vue,
    title: 'Vue框架',
    msg: '熟练使用Vue全家桶并有多个完整vue项目开发经验'
  }, {
    img: react,
    title: 'React框架',
    msg: '熟练使用React全家桶,有类组件,函数组件hooks混合开发项目的经验'
  }, {
    img: wx,
    title: 'wx小程序',
    msg: '熟练使用微信开发者工具,掌握原生小程序开发,有多个完整小程序项目开发经验'
  }, {
    img: node,
    title: 'node',
    msg: '对node有一定的使用,有使用node + express框架 + mongoDB数据库开发博客的经验'
  }
]

export default memo(function JSection2 () {
  return (
    <Section2Wrapper className="section">
      <JSectionTitle title="求职意向" />
      <div className="skills">
        {
          skills.map((item, index) => {
            return <JSkill key={item.img} skills={skills[index]} />
          })
        }
      </div>
    </Section2Wrapper>
  )
})
