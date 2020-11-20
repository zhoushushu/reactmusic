import React, { memo } from 'react'

import ArtistHeaderLine from '../artistheaderline/index'
import HotCoverInfo from '../hotcoverinfo/index'
import './style.less'

export default memo(function HotArtist (props) {
  //
  const { hotRadiosData } = props
  //
  return (
    <div className='hotartistwrapper'>
      <ArtistHeaderLine titleSlot='热门主播' />
      <div className='artist-container'>
        {hotRadiosData.map(item => {
          return <HotCoverInfo key={item.picUrl} info={item} />
        })}
      </div>
    </div>
  )
})
