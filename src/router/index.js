import React from 'react'
import { Redirect } from 'react-router-dom'

const Discover = React.lazy(() => import('../pages/discover/index'))
const Recommend = React.lazy(() => import('../pages/discover/recommend/index'))
const Ranking = React.lazy(() => import('../pages/discover/ranking/index'))
const SongList = React.lazy(() => import('../pages/discover/songlist/index'))
const Djradio = React.lazy(() => import('../pages/discover/djradio/index'))
const Artist = React.lazy(() => import('../pages/discover/artist/index'))
const Album = React.lazy(() => import('../pages/discover/album/index'))
const Search = React.lazy(() => import('../pages/search/index'))
const SearchSong = React.lazy(() => import('../pages/search/song/index'))
const SearchSinger = React.lazy(() => import('../pages/search/singer/index'))
const Music = React.lazy(() => import('../pages/music/index'))
const Friend = React.lazy(() => import('../pages/friend/index'))

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
      { path: '/discover/ranking', component: Ranking },
      { path: '/discover/songlist', component: SongList },
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
        render: () => <Redirect to='/search/song?song=&type=1' />
      },
      { path: '/search/song', component: SearchSong },
      { path: '/search/singer', component: SearchSinger }
    ]
  },
  {
    path: '/music',
    component: Music
  },
  {
    path: '/friend',
    component: Friend
  }
]

export default routes
