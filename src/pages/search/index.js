import React, { memo, useState } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { Input } from 'antd'
import { searchCategories } from '../../common/localdata'
import qs from 'query-string'
import './style.less'
import { useDebounceFn } from 'ahooks'

export default memo(function Search (props) {
  const [searchSongName, setSearchSongName] = useState(qs.parse(props.location.search).song)
  const [searchVal, setSearchVal] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  //
  const { song } = qs.parse(props.location.search)
  const { route } = props
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
              song !== ''
                ? <span>搜索"<span className='music-amount'>{song}</span>"</span>
                : <></>
            }
          </div>
          <div className='m-tab search-category'>
            {searchCategories.map((item, index) => {
              return (
                <NavLink
                  key={item.link}
                  to={{ pathname: item.link + `&song=${song}` }}
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
          {renderRoutes(route.routes)}
        </div>
      </div>
    </div>
  )
})
