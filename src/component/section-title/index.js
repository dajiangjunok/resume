import React, { memo } from 'react';
import { SectionTitleWrapper } from './style';

export default memo(function JSectionTitle (props) {
  return (
    <SectionTitleWrapper>
      <div className="about-me">
        <h2 >{props.title}</h2>
        <i className="bottom-line" />
      </div>
    </SectionTitleWrapper>
  )
})
