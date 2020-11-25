import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { PlayCircleOutlined } from '@ant-design/icons'
import './style.less'

function SongItem (props) {
  //
  const { songId, songName, singer, album, duration } = props
  // 播放音乐
  const playMusic = () => {
    //
  }
  //
  const addPlaylist = (e, songId) => {
    //
  }
  //
  return (
    <div className='songitemwrap'>
      <div className='song-name'>
        <PlayCircleOutlined onClick={() => playMusic()} />
        <em onClick={() => playMusic()}>{songName}</em>
        <button
          href='/discover/recommend'
          className='sprite_icon2 btn addto'
          onClick={(e) => addPlaylist(e, songId)}
        />
      </div>
      <NavLink
        to='/discover/song'
        className='singer'
        onClick={() => playMusic()}
      >
        {singer}
      </NavLink>
      <div className='text-nowrap album'>《{album}》</div>
      <div className='text-nowrap duration'>{duration}</div>
    </div>
  )
}

export default memo(SongItem)
