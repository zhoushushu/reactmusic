import React, { memo, useEffect } from 'react'

import ThemeHeader from '../../../../../components/themeheader/index'
import SongCover from '../../../../../components/songcover/index'
import './style.less'

export default memo(function HotRecommend (props) {
  //
  const { HotRecommendData } = props
  //
  return (
    <div className='hotrecommendwrapper'>
      <ThemeHeader
        title='热门推荐'
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
      />
      <div className='recommend-list'>
        {HotRecommendData && HotRecommendData.map(item => {
          return (
            <SongCover key={item.id} info={item} className='recommend-list'>
              {item.name}
            </SongCover>
          )
        })}
      </div>
    </div>
  )
})
