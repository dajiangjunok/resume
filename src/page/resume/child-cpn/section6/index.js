import React, { memo } from 'react';
import { Section6Wrapper } from './style';

import JSectionTitle from '@/component/section-title';

export default memo(function JSection1 () {
  return (
    <Section6Wrapper className="section">
      <JSectionTitle title="联系我" />
      <h2 className="up">WX:   qq779503577</h2>
    </Section6Wrapper>
  )
})
