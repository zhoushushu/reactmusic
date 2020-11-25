import React, { memo, useCallback, useEffect, useState } from 'react'
import qs from 'query-string'
import { SEARCHAPI } from '../../../service/api'
import { get } from '../../../service/http'
import './style.less'
import SongItem from './components/songitem/index'
import dayjs from 'dayjs'

export default memo(function SearchSong (props) {
  //
  const { song, type } = qs.parse(props.location.search)
  const [searchData, setSearchData] = useState([])
  // 获取数据
  const fetchData = useCallback(async () => {
    if (song === '') {
      setSearchData([])
      return
    }
    const temp = await get(`${SEARCHAPI}?limit=20&type=${type}&keywords=${song}`)
    setSearchData(temp.result.songs)
  }, [song, type])
  // 初始化--获取数据
  useEffect(() => {
    fetchData() // 获取数据
  }, [fetchData])
  //
  return (
    <div className='searchsongwrap'>
      {searchData && searchData.map((item) => {
        return (
          <SongItem
            key={item.id}
            songId={item.id}
            songName={item.name}
            singer={item.artists[0].name}
            album={item.album.name}
            duration={dayjs(item.duration).format('HH:ss')}
          />
        )
      })}
    </div>
  )
})
