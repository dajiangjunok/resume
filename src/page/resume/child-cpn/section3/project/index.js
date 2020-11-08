import React, { memo, useState } from 'react';
import { ProjectWrapper } from './style';

export default memo(function JProject (props) {
  const img = props.project.img;
  const title = props.project.title;
  const msg = props.project.msg;
  const [initailProject, setinitailProject] = useState({
    scale: 1,
    display: 'none'
  })

  const mouseEnter = () => {
    setinitailProject({
      scale: 1.1,
      display: 'block'
    })
  }

  const mouseLeave = () => {
    setinitailProject({
      scale: 1,
      display: 'none'
    })
  }

  return (
    <ProjectWrapper initailProject={initailProject} img={img} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <div className="mask">
        <div className="container">
          <p className="mask-title">{title}</p>
          <p className="mask-msg">{msg}</p>
          <i className="iconfont icon-sousuo"></i>
        </div>
      </div>
    </ProjectWrapper>
  )
})
