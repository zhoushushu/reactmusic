import React, { memo } from 'react'

import { getSizeImage } from '../../../../../utils/formatutils'
import dayjs from 'dayjs'
import { FieldTimeOutlined } from '@ant-design/icons'
import './style.less'

export default memo(function ToplistTitle (props) {
  //
  const { titleInfoData } = props
  //
  const picUrl = titleInfoData && titleInfoData.coverImgUrl
  const name = titleInfoData && titleInfoData.name
  const updateTime = titleInfoData && titleInfoData.trackNumberUpdateTime
  const commentCount = titleInfoData && titleInfoData.commentCount
  const shareCount = titleInfoData && titleInfoData.shareCount
  const subscribedCount = titleInfoData && titleInfoData.subscribedCount
  //
  return (
    <div className='ranktitlewrap'>
      <div className='title-image'>
        <img src={getSizeImage(picUrl, 150)} alt='' />
        <div className='image_cover msk' />
      </div>
      <div className='title-info'>
        <h2>{name}</h2>
        <div className='update-info'>
          <FieldTimeOutlined className='timer' />最近更新: {dayjs(updateTime).format('YYYY-MM-DD HH:mm')}
        </div>
        <div className='controls'>
          <div className='sprite_button play'>
            <i className='sprite_button inner'>
              <em className='sprite_button play-icon' />
              播放
            </i>
          </div>
          <div className='sprite_button favorite'>
            <i className='sprite_button inner'>
              <em className='sprite_button favorite-icon' />
              ({subscribedCount})
            </i>
          </div>
          <div className='sprite_button share'>
            <i className='sprite_button inner'>
              <em className='sprite_button favorite-icon' />
              ({shareCount})
            </i>
          </div>
          <div className='sprite_button download'>
            <i className='sprite_button inner'>
              <em className='sprite_button favorite-icon' />
              下载
            </i>
          </div>
          <div className='sprite_button comment'>
            <i className='sprite_button inner'>
              <em className='sprite_button favorite-icon' />
              ({commentCount})
            </i>
          </div>
        </div>
      </div>
    </div>
  )
})
