import React, { memo } from 'react'
import './style.less'

export default memo(function ArtistHeaderLine (props) {
  const { titleSlot, rightSlot } = props
  return (
    <div className='headerlinewrapper'>
      <div className='hot-artist'>{titleSlot}</div>
      <a href='/discover/recommend' className='no-link show-all'>{rightSlot}</a>
    </div>
  )
})
