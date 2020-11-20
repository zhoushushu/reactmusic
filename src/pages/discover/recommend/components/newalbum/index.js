import React, { memo, useRef } from 'react'

import ThemeHeader from '../../../../../components/themeheader/index'
import AlbumCover from '../../../../../components//albumcover/index'
import { Carousel } from 'antd'
import './style.less'

export default memo(function NewAlbum (props) {
  //
  const albumRef = useRef()
  const { NewAlbumsData } = props
  //
  return (
    <div className='newalbumwrap'>
      <ThemeHeader title='新碟上架' />
      <div className='content'>
        <div className='inner'>
          <Carousel dots={false} ref={albumRef}>
            {[0, 1].map(item => {
              return (
                <div key={item} className='page'>
                  {/* item * 5, (item+1) * 5   第一次遍历0  5  第二次遍历 5  10  */}
                  {NewAlbumsData && NewAlbumsData.slice(item * 5, (item + 1) * 5).map(cItem => {
                    return (
                      <AlbumCover
                        key={cItem.id}
                        info={cItem}
                        size={100}
                        width={118}
                        bgp='-570px'
                      >
                        {cItem.name}
                      </AlbumCover>
                    )
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <div
          className='sprite_02 arrow arrow-left'
          onClick={e => albumRef.current.prev()}
        />
        <div
          className='sprite_02 arrow arrow-right'
          onClick={e => albumRef.current.next()}
        />
      </div>
    </div>
  )
})
