import React, { memo, Suspense } from 'react'

import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes from './router/index'

import { Spin, ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import 'moment/locale/zh-cn'

import Header from './components/header/index'
import Footer from './components/footer/index'

export default memo(function App () {
  return (
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <Header />
        <Suspense fallback={<div className='spinwrap'><Spin size='size' tip='加载中' /></div>}>{renderRoutes(routes)}</Suspense>
        <Footer />
      </HashRouter>
    </ConfigProvider>
  )
})
