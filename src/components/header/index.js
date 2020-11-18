import React, { memo, useRef, useState } from 'react'
import { NavLink, Redirect } from 'react-router-dom'

import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { headerLinks } from '../../common/localdata'

import './style.less'

export default memo(function Header (props) {
  //
  const inputRef = useRef()
  const [value, setValue] = useState('')
  const [focusState, setFocusState] = useState(false)
  // 搜索框搜索中
  const changeInput = target => {
    const value = target.value.trim()
    if (value.length < 1) return
    // 显示下拉框
    setFocusState(true)
  }
  // 搜索框焦点中
  const handleFocus = () => {
    // 显示下拉框
    setFocusState(true)
  }
  //
  const handleEnter = () => {
    //
  }
  //
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
              onChange={(e) => setValue(e.target.value)}
              onInput={({ target }) => changeInput(target)}
              onFocus={handleFocus}
              onPressEnter={(e) => handleEnter(e)}
              value={value}
            />
            <div
              className='down-slider'
              style={{ display: focusState ? 'block' : 'none' }}
            >
              <div className='search-header'>
                <span className='discover'>搜"歌曲"相关用户&gt;</span>
              </div>

              <div className='content'>
                <div className='zuo'>
                  <span className='song'>单曲</span>
                </div>
                <span className='main'>
                  <div
                    className='item'
                  >
                    <span>歌曲名称</span>-艺术家
                  </div>
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
