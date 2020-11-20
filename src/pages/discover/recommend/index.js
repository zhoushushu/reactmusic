import React, { memo, useState, useEffect, useCallback } from 'react'
import TopSlide from './components/topslide/index'
import HotRecommend from './components/hotrecommend/index'
import NewAlbums from './components/newalbum/index'
import RecommendRanking from './components/recommendranking/index'
import UserLogin from './components/userlogin/index'
import SettleSinger from './components/settlesinger/index'
import HotArtist from './components/hotartist/index'

import { BANNERAPI, HOTRECOMMENDAPI, NEWALBUMAPI, RECOMMENDRANKAPI, ARTISTLISTAPI } from '../../../service/api'
import { getall } from '../../../service/http'

import { hotRadios } from '../../../common/localdata'

import './style.less'

export default memo(function Recommend (props) {
  //
  const [slideData, setSlideData] = useState([])
  const [HotRecommendData, setHotRecommendData] = useState([])
  const [NewAlbumsData, setNewAlbumsData] = useState([])
  const [originRankData, setOriginRankData] = useState([])
  const [upRankData, setUpRankData] = useState([])
  const [newRankData, setNewRankData] = useState([])
  const [settleSingerData, setSettleSingerData] = useState([])
  // 获取数据
  const fetchData = useCallback(async () => {
    const url = [
      BANNERAPI, // 获取轮播图数据
      HOTRECOMMENDAPI, // 获取热门推荐数据
      NEWALBUMAPI, // 获取新碟上架数据
      `${RECOMMENDRANKAPI}?id=19723756`, // 获取榜单数据
      `${RECOMMENDRANKAPI}?id=3779629`, // 获取榜单数据
      `${RECOMMENDRANKAPI}?id=2884035`, // 获取榜单数据
      ARTISTLISTAPI // 入驻歌手
    ]
    const temp = await getall(url)
    setSlideData(temp[0].data.banners)
    setHotRecommendData(temp[1].data.result)
    setNewAlbumsData(temp[2].data.albums)
    setOriginRankData(temp[3].data.playlist)
    setUpRankData(temp[4].data.playlist)
    setNewRankData(temp[5].data.playlist)
    setSettleSingerData(temp[6].data.artists)
  }, [])
  // 初始化--获取数据
  useEffect(() => {
    fetchData() // 获取数据
  }, [fetchData])
  //
  return (
    <div className='recommendwrap'>
      <TopSlide slideData={slideData} />
      <div className='content w980'>
        <div className='recommendleft'>
          {/* 热门推荐 */}
          <HotRecommend HotRecommendData={HotRecommendData} />
          {/* 新碟上架 */}
          <NewAlbums NewAlbumsData={NewAlbumsData} />
          {/* 榜单 */}
          <RecommendRanking originRankData={originRankData} upRankData={upRankData} newRankData={newRankData} />
        </div>
        <div className='recommendright'>
          {/* 登录 */}
          <UserLogin />
          {/* 入驻歌手 */}
          <SettleSinger settleSingerData={settleSingerData} />
          {/* 热门主播 */}
          <HotArtist hotRadiosData={hotRadios} />
        </div>
      </div>
    </div>
  )
})
