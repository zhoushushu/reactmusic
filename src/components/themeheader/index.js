import React, { memo } from 'react'
import { HeaderLeft, HeaderRight, ThemeHeaderWrapper } from './style'

const ThemeHeader = props => {
  //
  const { title, keywords = [], showIcon = true, right = '更多' } = props
  //
  return (
    <ThemeHeaderWrapper showIcon={showIcon}>
      <HeaderLeft>
        <h2 className='hot-title'>
          <a href='/discover/recommend' className='no-link hot-text'>
            {title}
          </a>
        </h2>
        <ul className='keywords'>
          {keywords.map(item => {
            return (
              <li className='item' key={item}>
                <a href='/'>{item}</a>
                <span className='line'>|</span>
              </li>
            )
          })}
        </ul>
      </HeaderLeft>
      <HeaderRight>
        <span>{right}</span>
        {showIcon && <i className='icon' />}
      </HeaderRight>
    </ThemeHeaderWrapper>
  )
}

export default memo(ThemeHeader)
