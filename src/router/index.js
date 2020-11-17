import React from 'react'
import { Redirect } from 'react-router-dom'
const Discover = React.lazy(() => import('../pages/discover/index'))
const Recommend = React.lazy(() =>
  import('../pages/discover/childpages/recommend')
)

const routes = [
  { path: '/', exact: true, render: () => <Redirect to='/discover' /> },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to='/discover/recommend' />
      },
      { path: '/discover/recommend', component: Recommend }
    ]
  }
]

export default routes
