import React, { memo } from 'react';
import { ResumeWrapper } from './style';

import JSection0 from './child-cpn/section0';
import JSection1 from './child-cpn/section1';
import JSection2 from './child-cpn/section2';
import JSection3 from './child-cpn/section3';
import JSection4 from './child-cpn/section4';
import JSection5 from './child-cpn/section5';
import JSection6 from './child-cpn/section6';

export default memo(function JResume () {

  return (
    <ResumeWrapper  >
      <JSection0 />
      <JSection1 />
      <JSection2 />
      <JSection3 />
      <JSection4 />
      <JSection5 />
      <JSection6 />
    </ResumeWrapper>
  )
})
