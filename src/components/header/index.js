import React, { memo, useRef, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { headerLinks } from '../../common/localdata'
import { useDebounceFn } from 'ahooks'
import { SEARCHAPI } from '../../service/api'
import { get } from '../../service/http'

import './style.less'

export default memo(function Header (props) {
  //
  const inputRef = useRef()
  const [value, setValue] = useState('')
  const [searchShow, setSearchShow] = useState(false)
  const [searchData, setSearchData] = useState([])
  const history = useHistory()
  // 搜索框搜索中
  const changeInput = val => {
    const value = val.trim()
    setValue(value)
    // 显示搜索结果框
    setSearchShow(true)
    // 防抖搜索歌曲
    run(value)
  }
  // 防抖搜索歌曲
  const { run } = useDebounceFn(
    async val => {
      const temp = await get(`${SEARCHAPI}?keywords=${val}&limit=5&type=1`)
      setSearchData(temp.result.songs)
    },
    {
      wait: 500
    }
  )
  // 搜索框焦点中
  const handleFocus = () => {
    // 显示搜索结果框
    setSearchShow(true)
  }
  // 搜索框失去焦点中
  const handleBlur = () => {
    setTimeout(() => {
      setSearchShow(false)
    }, 50)
  }
  // 回车搜索
  const handleEnter = () => {
    if (inputRef.current.input.value) {
      setValue('')
      history.push({
        pathname: '/search/single',
        search: `?song=${inputRef.current.input.value}&type=1`
      })
    }
  }
  // 点击歌曲跳转搜索页面
  const gotoSearch = value => {
    setValue('')
    history.push({
      pathname: '/search/single',
      search: `?song=${value}&type=1`
    })
  }
  // 渲染歌手
  const renderArtists = artists => {
    return (
      artists.map(item => {
        return (
          <span key={item.id}>{item.name}</span>
        )
      })
    )
  }
  // 渲染导航
  const showSelectItem = item => {
    if (item.local) {
      return (
        <NavLink
          key={item.title}
          to={item.link}
          className='header-item'
          activeClassName='link-active'
        >
          <em>{item.title}</em>
          <i className='icon' />
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} key={item.title} className='header-item'>
          {item.title}
        </a>
      )
    }
  }
  //
  return (
    <div className='headerwrapper'>
      <div className='content w1100'>
        <div className='headerleft'>
          <h1>
            <a href='/' className='logo sprite_01'>
              网易云音乐
            </a>
          </h1>
          {/* 导航 */}
          <div className='header-group'>
            {
              headerLinks.map(item => {
                return showSelectItem(item)
              })
            }
          </div>
        </div>
        <div className='headerright'>
          <div className='search-wrapper'>
            <Input
              ref={inputRef}
              className='search'
              placeholder='音乐/歌手'
              prefix={<SearchOutlined />}
              onChange={(e) => changeInput(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onPressEnter={(e) => handleEnter(e)}
              value={value}
            />
            {/* 搜索内容展示 */}
            <div
              className='down-slider'
              style={{ display: searchShow ? 'block' : 'none' }}
            >
              <div className='search-header'>
                <span className='discover'>搜"歌曲"相关用户&gt;</span>
              </div>

              <div className='content'>
                <div className='zuo'>
                  <span className='song'>单曲</span>
                </div>
                {/* 搜索歌手列表 */}
                <span className='main'>
                  {
                    searchData.map(item => {
                      return (
                        <div
                          className='item'
                          key={item.id}
                          onClick={() => gotoSearch(value)}
                        >
                          <span>{item.album.name}</span>-{renderArtists(item.artists)}
                        </div>
                      )
                    })
                  }
                </span>
              </div>
            </div>
          </div>
          <div className='center'>创作者中心</div>
          <div>登录</div>
        </div>
      </div>
      <div className='red-line' />
    </div>
  )
})
