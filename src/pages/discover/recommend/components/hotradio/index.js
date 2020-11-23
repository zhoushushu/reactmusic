import React, { memo } from 'react'

import ArtistHeaderLine from '../artistheaderline/index'
import HotCoverInfo from '../hotcoverinfo/index'
import './style.less'

export default memo(function HotRadio (props) {
  //
  const { hotRadiosData } = props
  //
  return (
    <div className='hotradiowrapper'>
      <ArtistHeaderLine titleSlot='热门主播' />
      <div className='artist-container'>
        {hotRadiosData.map(item => {
          return <HotCoverInfo key={item.picUrl} info={item} />
        })}
      </div>
    </div>
  )
})
