import React, { memo, useEffect, useState, useCallback, useRef } from 'react'
import RankList from './components/ranklist'
import RankTitle from './components/ranktitle'
import RankDetailList from './components/rankdetaillist'
import qs from 'query-string'
import { RANKINGLIST, RANKINGLISTDETAIL } from '../../../service/api'
import { get } from '../../../service/http'
import './style.less'

export default memo(function Ranking (props) {
  //
  const [rankListData, setRankListData] = useState([])
  const [titleInfoData, setTitleInfoData] = useState([])
  const [playCount, setPlayCount] = useState(0)
  const [RankDetailListData, setRankDetailListData] = useState([])
  const { id } = qs.parse(props.location.search)
  const rankId = useRef('')
  const rankListDataTemp = useRef('')
  // 获取左侧列表数据
  const fetchRankListData = useCallback(async () => {
    const temp = await get(RANKINGLIST)
    setRankListData(temp.list) // 获取左侧列表数据
    rankListDataTemp.current = temp.list
    rankId.current = temp.list[0].id
  }, [])
  // 获取右侧数据
  const fetchRankListDetailData = useCallback(async id => {
    const temp = await get(`${RANKINGLISTDETAIL}/detail?id=${id}`)
    console.log(temp)
    setTitleInfoData(temp.playlist)
    setPlayCount(temp.playlist.playCount)
    setRankDetailListData(temp.playlist.tracks)
  }, [])
  // 根据url传递的id进行数据获取
  const fetchData = useCallback(async () => {
    if (id) {
      // 如果没有左侧数据--获取左侧列表数据
      if (!rankListDataTemp.current || rankListDataTemp.current.length === 0) {
        await fetchRankListData()
      }
      // 获取右侧数据
      await fetchRankListDetailData(id)
    } else {
      // 获取左侧列表数据
      await fetchRankListData()
      // 获取右侧数据
      await fetchRankListDetailData(rankId.current)
    }
  }, [fetchRankListData, fetchRankListDetailData, id])
  // 初始化
  useEffect(() => {
    fetchData()
  }, [fetchData])
  //
  return (
    <div className='wrap-bg2 discoverrankingwrap'>
      <div className='content w980'>
        <div className='ranklistleft'>
          <div className='ranklistcontainer'>
            <RankList rankListData={rankListData} history={props.history} />
          </div>
        </div>
        <div className='ranklistright'>
          <RankTitle titleInfoData={titleInfoData} />
          <RankDetailList playCount={playCount} RankDetailListData={RankDetailListData} />
        </div>
      </div>
    </div>
  )
})
