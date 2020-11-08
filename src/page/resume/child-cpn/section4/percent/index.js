import React, { memo } from 'react';
import { PercentWrapper } from './style';

export default memo(function JPercent (props) {

  return (
    <PercentWrapper project={props.project.project}>
      <div className="wrap-box">
        <div className="circle-wrap clip-auto">
          <div className="left-clip percent"></div>
          <div className="right-clip percent"></div>
        </div>
        <div className="circle-num">
          <span>{props.project.project}</span>%
        </div>
      </div>
      <p className="ptitle">{props.project.title}</p>
    </PercentWrapper>
  )
})
