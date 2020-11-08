import React, { memo } from 'react';
import { Section4Wrapper } from './style';

import JSectionTitle from '@/component/section-title';
import JPercent from './percent';

export default memo(function JSection4 () {
  const initialProjects = [
    {
      project: 90,
      title: 'Vue'
    }, {
      project: 85,
      title: 'React'
    }, {
      project: 80,
      title: 'Node'
    }, {
      project: 85,
      title: '微信小程序'
    }, {
      project: 80,
      title: 'Electron'
    }, {
      project: 85,
      title: 'Javascript'
    }, {
      project: 80,
      title: 'Css'
    }, {
      project: 85,
      title: 'HTML'
    }
  ]

  return (
    <Section4Wrapper className="section">
      <JSectionTitle title="技术掌握" />
      <div className="percent-container">
        {
          initialProjects.map((item, index) => {
            return <JPercent key={item.title} project={item} />
          })
        }
      </div>
    </Section4Wrapper>
  )
})
