import React, { memo } from 'react'
import { getSizeImage } from '../../../../../utils/formatutils'
import './style.less'

export default memo(function SingerCover (props) {
  const { info } = props
  return (
    <div className='singercoverwrapper'>
      <div className='image'>
        <img src={getSizeImage(info.picUrl, 62)} alt='' />
      </div>
      <div className='singer-title'>
        <div className='text-nowrap singer-name'>{info.name}</div>
        <div className='text-nowrap singer-detail'>流行歌手</div>
      </div>
    </div>
  )
})
