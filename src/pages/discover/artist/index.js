import React, { memo } from 'react'
import './style.less'
import { Empty } from 'antd'

export default memo(function DiscoverArtist (props) {
  //
  return (
    <div className='discoverartistwrap'>
      <Empty description='敬请期待' />
    </div>
  )
})
