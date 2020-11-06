import React from 'react';

import { NavLink } from 'react-router-dom'
import { MarkerWrapper } from './style';

export default function JMarker (props) {

  return (
    <MarkerWrapper>
      <NavLink className="link" to={props.toLink.link}>
        {props.toLink.title}
      </NavLink>
    </MarkerWrapper>
  )
}
