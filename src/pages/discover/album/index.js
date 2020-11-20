import React, { memo } from 'react'
import './style.less'
import { Empty } from 'antd'

export default memo(function DiscoverAlbum (props) {
  //
  return (
    <div className='discoveralbumwrap'>
      <Empty description='敬请期待' />
    </div>
  )
})
