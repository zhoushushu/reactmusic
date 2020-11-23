import { HOT_RECOMMEND_LIMIT, SETTLE_SINGER_COUNT } from '../common/constants'

// export const BASEURL = 'http://123.57.176.198:3000'
export const BASEURL = 'http://localhost:3000'

export const SEARCHAPI = `${BASEURL}/search` // 搜索
export const BANNERAPI = `${BASEURL}/banner` // 轮播图
export const HOTRECOMMENDAPI = `${BASEURL}/personalized?limit=${HOT_RECOMMEND_LIMIT}` // 热门推荐
export const NEWALBUMAPI = `${BASEURL}/album/newest` // 新碟上架
export const RECOMMENDRANKAPI = `${BASEURL}/playlist/detail` // 榜单
export const ARTISTLISTAPI = `${BASEURL}/artist/list?limit=${SETTLE_SINGER_COUNT}` // 热门主播
export const RANKINGLIST = `${BASEURL}/toplist` // 排行榜
export const RANKINGLISTDETAIL = `${BASEURL}/playlist` // 榜单详情
