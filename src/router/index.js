import React from 'react'
import { Redirect } from 'react-router-dom'

const Discover = React.lazy(() => import('../pages/discover/index'))
const Recommend = React.lazy(() =>
  import('../pages/discover/recommend/index')
)
const Djradio = React.lazy(() => import('../pages/discover/djradio/index'))
const Artist = React.lazy(() => import('../pages/discover/artist/index'))
const Album = React.lazy(() => import('../pages/discover/album/index'))
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
      { path: '/discover/recommend', component: Recommend },
      { path: '/discover/djradio', component: Djradio },
      { path: '/discover/artist', component: Artist },
      { path: '/discover/album', component: Album }
    ]
  },
  {
    path: '/search',
    component: Search,
    routes: [
      {
        path: '/search',
        exact: true,
        render: () => <Redirect to='/search/single' />
      },
      { path: '/search/single', component: SearchSingle }
    ]
  }
]

export default routes
