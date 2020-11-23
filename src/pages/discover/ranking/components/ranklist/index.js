import React, { memo, useState, Fragment } from 'react'
import { getSizeImage } from '../../../../../utils/formatutils'
import { NavLink } from 'react-router-dom'
import './style.less'

function RankList (props) {
  //
  const [activeIndex, setActiveIndex] = useState(0)
  const { rankListData } = props
  //
  const clickItem = (e, index, id) => {
    setActiveIndex(index)
  }
  //
  return (
    <div className='ranklistwrap'>
      {rankListData.map((item, index) => {
        return (
          <Fragment key={item.id}>
            <h3 style={{ marginTop: index === 4 ? '17px' : '' }}>
              {index === 0 ? '云音乐特色榜' : index === 4 ? '全球媒体榜' : ''}
            </h3>
            <NavLink
              className={'info ' + (index === activeIndex ? 'bg' : '')}
              onClick={(e) => clickItem(e, index, item.id)}
              to={{ pathname: '/discover/ranking', search: `?id=${item.id}` }}
            >
              <div className='image'>
                <img src={getSizeImage(item.coverImgUrl, 44)} alt='' />
              </div>
              <div className='info-right'>
                <div className='info-title'>{item.name}</div>
                <div className='info-update'>{item.updateFrequency}</div>
              </div>
            </NavLink>
          </Fragment>
        )
      })}
    </div>
  )
}

export default memo(RankList)
