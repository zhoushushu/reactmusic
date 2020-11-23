import React, { memo } from 'react'

import dayjs from 'dayjs'
import ThemeHeader from '../../../../../components/themeheader/index'
import SongItem from '../songitem/index'
// import { getToplistItemAction } from '../../store/actionCreator'
import './style.less'

export default memo(function RankDetailList (props) {
  // props/states
  const { playCount, RankDetailListData } = props
  //
  const rightSlot = (
    <span>
      播放：<em style={{ color: '#c20c0c' }}>{playCount}</em>次
    </span>
  )
  //
  return (
    <div className='rankdetaillistwrap'>
      <ThemeHeader title='歌曲列表' showIcon={false} right={rightSlot} />
      <div className='toplist-main'>
        <div className='main-header'>
          <div className='sprite_table header-item' />
          <div className='sprite_table header-item header-title'>标题</div>
          <div className='sprite_table header-item header-time'>时长</div>
          <div className='sprite_table header-item header-singer'>歌手</div>
        </div>
        <div className='main-list'>
          {
            RankDetailListData && RankDetailListData.slice(0, 100).map((item, index) => {
              return (
                <SongItem
                  key={item.id}
                  currentRanking={index + 1}
                  className='song_item'
                  coverPic={index < 3 ? item.al.picUrl : ''}
                  duration={dayjs(item.dt).format('mm:ss')}
                  songName={item.name}
                  singer={item.ar[0].name}
                  songId={item.id}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
})
