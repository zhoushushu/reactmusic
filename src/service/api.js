import { HOT_RECOMMEND_LIMIT } from '../common/constants'

export const BASEURL = 'http://123.57.176.198:3000'

export const SEARCHAPI = `${BASEURL}/search` // 搜索
export const BANNERAPI = `${BASEURL}/banner` // 轮播图
export const HOTRECOMMENDAPI = `${BASEURL}/personalized?limit=${HOT_RECOMMEND_LIMIT}` // 热门推荐
