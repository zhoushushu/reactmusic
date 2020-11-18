import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { dicoverMenu } from '../../common/localdata'
import './style.less'

export default memo(function Discovery (props) {
  //
  const { route } = props
  //
  return (
    <div className='headercategorywrap'>
      <div className='top'>
        <ul className='w1100 categorylist'>
          {dicoverMenu.map((item) => {
            return (
              <li key={item.title} className='item'>
                <NavLink to={item.link} activeClassName='menu-active'>
                  {item.title}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
      {renderRoutes(route.routes)}
    </div>
  )
})
