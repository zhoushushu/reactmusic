import React, { memo } from 'react'
import propTypes from 'prop-types'
import { HeaderLeft, HeaderRight, ThemeHeaderWrapper } from './style'

const ThemeHeader = props => {
  const { title, keywords, showIcon, right } = props
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

ThemeHeader.propTypes = {
  // title属性必填
  title: propTypes.string.isRequired,
  keywords: propTypes.array,
  showIcon: propTypes.bool,
  right: propTypes.any
}

ThemeHeader.defaultProps = {
  keywords: [],
  showIcon: true,
  right: '更多'
}

export default memo(ThemeHeader)
