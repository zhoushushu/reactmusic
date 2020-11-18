import React, { memo } from 'react'
import qs from 'query-string'
import './style.less'

export default memo(function Search (props) {
  console.log('------------------------------------')
  console.log(qs.parse(props.location.search))
  console.log('------------------------------------')
  //
  return (
    <div className='searchwrap'>
      123
    </div>
  )
})
