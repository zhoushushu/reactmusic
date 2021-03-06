/**
 * 对数字进行格式化
 * @param {number} count
 */
export function getCount (count) {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万'
  } else {
    return Math.floor(count / 10000000) / 10 + '亿'
  }
}

export function getSizeImage (imgUrl, size) {
  if (imgUrl) {
    return `${imgUrl}?param=${size}x${size}`
  } else {
    return 'error'
  }
}

export function getPlayUrl (id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}
