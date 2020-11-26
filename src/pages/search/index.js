import React, { memo, useState, Suspense, useEffect } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { Input, Spin } from 'antd'
import { searchCategories } from '../../common/localdata'
import qs from 'query-string'
import './style.less'
import { useDebounceFn } from 'ahooks'

export default memo(function Search (props) {
  const [searchSongName, setSearchSongName] = useState('') // url数据
  const [searchVal, setSearchVal] = useState('') // 搜索input数据
  const [activeIndex, setActiveIndex] = useState(0)
  //
  const { route } = props
  //
  useEffect(() => {
    setSearchSongName(qs.parse(props.location.search).song)
    setSearchVal(qs.parse(props.location.search).song)
  }, [props])
  //
  const changeInput = val => {
    setSearchVal(val)
    run(val)
  }
  //
  const { run } = useDebounceFn(
    (value) => {
      setSearchSongName(value)
    },
    {
      wait: 500
    }
  )
  //
  return (
    <div className='searchwrap'>
      <div className='w980 content'>
        <div className='search-wrapper'>
          <Input.Search
            value={searchVal}
            style={{ width: 490 }}
            onChange={(e) => changeInput(e.target.value)}
          />
        </div>
        <div className='search-content'>
          <div className='search-info'>
            {
              searchVal !== ''
                ? <span>搜索"<span className='music-amount'>{searchVal}</span>"</span>
                : <></>
            }
          </div>
          <div className='m-tab search-category'>
            {searchCategories.map((item, index) => {
              return (
                <NavLink
                  key={item.link}
                  to={{ pathname: item.link + `&song=${searchVal}` }}
                  className={`route-item m-tab ${
                    activeIndex === index ? 'active' : ''
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {activeIndex === index ? <Redirect to={item.link + `&song=${searchSongName}`} /> : null}
                  <em>{item.title}</em>
                </NavLink>
              )
            })}
          </div>
          <Suspense fallback={<div className='spinwrap'><Spin size='size' tip='加载中' /></div>}>{renderRoutes(route.routes)}</Suspense>
        </div>
      </div>
    </div>
  )
})
