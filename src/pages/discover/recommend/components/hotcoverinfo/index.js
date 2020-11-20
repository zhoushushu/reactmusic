import React, { memo } from 'react'
import { getSizeImage } from '../../../../../utils/formatutils'
import './style.less'

export default memo(function HotCoverInfo (props) {
  const { info } = props
  return (
    <div className='hotcoverinfocover'>
      <div className='artist-image'>
        <img src={getSizeImage(info.picUrl, 40)} alt='' />
      </div>
      <div className='artist-info'>
        <a href={info.url} className='artist-name'>{info.name}</a>
        <a href={info.url} className='artist-detail text-nowrap'>{info.position}</a>
      </div>
    </div>
  )
})
