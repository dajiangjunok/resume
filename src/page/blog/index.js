import React, { memo } from 'react';

import JMarker from '@/component/marker';

export default memo(function JBlog () {
  const toLink = {
    title: '我的简历',
    link: '/resume'
  }

  return (
    <div>
      <JMarker toLink={toLink} />
      <h2>JBlog</h2>
    </div>
  )
})
