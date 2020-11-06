import React from 'react';
import { Redirect } from 'react-router-dom'


import JResume from '../page/resume';
import JBlog from '../page/blog';

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/resume" />
  },
  {
    path: "/resume",
    component: JResume
  },
  {
    path: "/blog",
    component: JBlog
  }
]

export default routes