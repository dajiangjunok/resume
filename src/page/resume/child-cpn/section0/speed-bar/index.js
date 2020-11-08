import React, { memo } from 'react';
import { SpeedWrapper } from './style'

export default memo(function JSpeedBar (props) {
  const speedList = props.speedList;

  return (
    <SpeedWrapper>
      {
        speedList.map((item, index) => {
          return (
            <span key={index} className={'speed-btn ' + ((index !== 0) && 'not-first')}>{item}</span>
          )
        })
      }

    </SpeedWrapper>
  )
}) 
