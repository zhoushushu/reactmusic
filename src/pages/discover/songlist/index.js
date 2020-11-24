import React, { memo, useEffect, useState, useCallback } from 'react'
import './style.less'
import { PLAYLISTAPI } from '../../../service/api'
import { get } from '../../../service/http'
import ThemeHeader from '../../../components/themeheader/index'
import SongCover from '../../../components/songcover/index'
import { Pagination } from 'antd'

export default memo(function DiscoverSongList (props) {
  //
  const [songListData, setSongListData] = useState([])
  // 获取数据
  const fetchData = useCallback(async (page = 0) => {
    const temp = await get(`${PLAYLISTAPI}?limit=35&offset=${page}`)
    setSongListData(temp.playlists)
  }, [])
  // 初始化--获取数据
  useEffect(() => {
    fetchData()
  }, [fetchData])
  // 分页请求
  const changePage = useCallback(currentPage => {
    fetchData(currentPage - 1)
  }, [fetchData])
  //
  return (
    <div className='discoversonglistwrap w980'>
      <ThemeHeader title='全部' />
      {/* 歌单列表 */}
      <div className='content'>
        {songListData.map((songItem) => {
          return (
            <SongCover key={songItem.id} songList={songItem} width={150} />
          )
        })}
      </div>
      {/* 分页 */}
      <Pagination
        defaultCurrent={1}
        total={370}
        onChange={(currentPage) => changePage(currentPage)}
      />
    </div>
  )
})
