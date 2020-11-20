import React, { memo } from 'react'

import ThemeHeader from '../../../../../components/themeheader/index'
import TopRank from '../../../../../components/toprank/index'

import './style.less'

export default memo(function RecommendRanking (props) {
  const { originRankData, upRankData, newRankData } = props
  //
  return (
    <div className='rankingwrapper'>
      <ThemeHeader title='榜单' />
      <div className='ranking-info'>
        <TopRank info={originRankData} />
        <TopRank info={upRankData} />
        <TopRank info={newRankData} />
      </div>
    </div>
  )
})
