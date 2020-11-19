import React, { memo, useRef, useState, useEffect, useCallback } from 'react'
import { Carousel } from 'antd'
import { TopSlideWrap } from './style'
import './style.less'

export default memo(function TopSlide (props) {
  const bannerRef = useRef()
  const { slideData } = props
  const [bgImage, setBgImage] = useState('')
  // 初次设置轮播图背景
  useEffect(() => {
    if (slideData.length) {
      setBgImage(slideData[0].imageUrl)
    }
  }, [slideData])
  // 轮播更换设置轮播图背景
  const bannerChange = useCallback((from, to) => {
    if (slideData.length) {
      setBgImage(slideData[to].imageUrl)
    }
  }, [slideData])
  //
  return (
    <TopSlideWrap bgImage={bgImage}>
      <div className='topslidewrap'>
        <div className='banner w980'>
          <div className='bannerleft'>
            <Carousel
              effect='fade'
              autoplay
              ref={bannerRef}
              beforeChange={bannerChange}
            >
              {slideData && slideData.map(item => {
                return (
                  <div key={item.imageUrl}>
                    <img src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })}
            </Carousel>
          </div>
          <div className='bannerright'>
            <a href='https://music.163.com/#/download' rel='noreferrer' target='_blank'>123</a>
          </div>
          <div className='bannercontrol'>
            <button
              className='btn'
              onClick={() => bannerRef.current.prev()}
            />
            <button
              className='btn'
              onClick={() => bannerRef.current.next()}
            />
          </div>
        </div>
      </div>
    </TopSlideWrap>
  )
})
