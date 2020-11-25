import React, { memo, useCallback, useEffect, useState } from 'react'
import qs from 'query-string'
import { SEARCHAPI } from '../../../service/api'
import { get } from '../../../service/http'
import './style.less'
import SingerItem from './components/singeritem/index'

export default memo(function SearchSinger (props) {
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
    setSearchData(temp.result.artists)
  }, [song, type])
  // 初始化--获取数据
  useEffect(() => {
    fetchData() // 获取数据
  }, [fetchData])
  //
  return (
    <div className='searchsingerwrap'>
      {searchData && searchData.map((item) => {
        return (
          <SingerItem
            key={item.id}
            coverPic={item.picUrl}
            singer={item.name}
          />
        )
      })}
    </div>
  )
})
