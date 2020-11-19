import React, { memo, useState, useEffect, useCallback } from 'react'
import TopSlide from './components/topslide/index'
import HotRecommend from './components/hotrecommend/index'

import { BANNERAPI, HOTRECOMMENDAPI } from '../../../service/api'
import { get } from '../../../service/http'

import './style.less'

export default memo(function Recommend (props) {
  //
  const [slideData, setSlideData] = useState([])
  const [HotRecommendData, setHotRecommendData] = useState([])
  // 获取轮播图数据
  const getSlideData = useCallback(async () => {
    const temp = await get(BANNERAPI)
    setSlideData(temp.banners)
  }, [])
  // 获取热门推荐数据
  const getHotRecommendData = useCallback(async () => {
    const temp = await get(HOTRECOMMENDAPI)
    setHotRecommendData(temp.result)
  }, [])
  // 初始化--获取轮播图数据
  useEffect(() => {
    getSlideData() // 获取轮播图数据
    getHotRecommendData() // 获取热门推荐数据
  }, [getSlideData])
  //
  return (
    <div className='recommendwrap'>
      <TopSlide slideData={slideData} />
      <div className='content w980'>
        <div className='recommendleft'>
          <HotRecommend HotRecommendData={HotRecommendData} />
        </div>
        <div className='recommendright'>
          123
        </div>
      </div>
    </div>
  )
})
