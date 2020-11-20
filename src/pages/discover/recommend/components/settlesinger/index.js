import React, { memo } from 'react'
import ArtistHeaderLine from '../artistheaderline/index'
import SingerCover from '../singercover/index'

import './style.less'

export default memo(function SettleSinger (props) {
  //
  const { settleSingerData } = props
  //
  return (
    <div className='settlesingerwrap'>
      <ArtistHeaderLine titleSlot='入驻歌手' rightSlot='查看全部 >' />
      <div className='singer-container'>
        {settleSingerData && settleSingerData.map(item => {
          return <SingerCover key={item.id} info={item} />
        })}
      </div>
    </div>
  )
})
