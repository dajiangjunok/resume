import React, { memo } from 'react';
import { ExperienceWrapper } from './style';

export default memo(function JExperience (props) {
  return (
    <ExperienceWrapper>
      <div className="time">
        {
          props.index !== 0 ? <div className="line"></div> : null
        }
        <p>{props.experience.endTime}</p>
        <p>-</p>
        <p>{props.experience.startTime}</p>
      </div>
      <div className="content">
        <p className="title">
          {props.experience.title}
        </p>
        <p className="name">
          {props.experience.name}
        </p>
        <p className="msg">
          {props.experience.msg}
        </p>
      </div>
    </ExperienceWrapper>
  )
})
