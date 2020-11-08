import React, { memo } from 'react';
import { Section5Wrapper } from './style';

import JSectionTitle from '@/component/section-title';
import JExperience from './experience';

export default memo(function JSection5 () {
  const experiences = [
    {
      startTime: '03/2020',
      endTime: '至今',
      title: '捷途慧声有限公司',
      name: '技术部/前端工程师',
      msg: '主用技术框架为Vue + elementUI,公司主要以AI语音识别产品为主,与海康合作较多,期间有对原有react，Vue项目用Electron进行重构'
    }, {
      startTime: '09/2018',
      endTime: '02/2020',
      title: '亦优贸易有限公司',
      name: '技术部/前端工程师',
      msg: '负责公司产品前端项目开发,包括PC端,移动端,技术栈React'
    }, {
      startTime: '09/2017',
      endTime: '06/2018',
      title: '和信聚赢有限公司',
      name: '技术部/前端工程师',
      msg: ' 负责公司微信小程序项目开发，Vue移动端项目开发，以及较陈旧的jquery项目维护'
    }
  ]

  return (
    <Section5Wrapper className="section">
      <JSectionTitle title="我的经历" />
      <div className="experience-container">
        {
          experiences.map((item, index) => {
            return <JExperience index={index} experience={item} key={item.title} />
          })
        }

      </div>
    </Section5Wrapper>
  )
})
