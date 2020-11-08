import React, { memo } from 'react';

import { SkillWrapper } from './style';

export default memo(function JSkill (props) {
  const img = props.skills.img;
  const title = props.skills.title;
  const msg = props.skills.msg;

  return (
    <SkillWrapper>
      <img src={img} alt="" />
      <p className="title">{title}</p>
      <p className="msg">{msg}</p>
    </SkillWrapper>
  )
})
