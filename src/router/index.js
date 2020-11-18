import React from 'react'
import { Redirect } from 'react-router-dom'

const Discover = React.lazy(() => import('../pages/discover/index'))
const Recommend = React.lazy(() =>
  import('../pages/discover/recommend/index')
)
const Search = React.lazy(() => import('../pages/search/index'))
const SearchSingle = React.lazy(() => import('../pages/search/single/index'))

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
  },
  {
    path: '/search',
    component: Search,
    routes: [
      {
        path: '/search',
        exact: true,
        render: () => <Redirect to='/search/single?song=&type=1' />
      },
      { path: '/search/single', component: SearchSingle }
    ]
  }
]

export default routes
