import axios from './axios.js'
import { message } from 'antd'

// get单个接口方法
export function get (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: url,
      params: data
    }).then(
      res => {
        resolve(res.data)
      },
      err => {
        reject(err)
        message.error(err)
      }
    )
  })
}

// post方法
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: url,
      data: data
    }).then(
      res => {
        resolve(res.data)
      },
      err => {
        reject(err)
        message.error(err)
      }
    )
  })
}

// patch方法
export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'put',
      url: url,
      data: data
    }).then(
      res => {
        resolve(res.data)
      },
      err => {
        reject(err)
        message.error(err)
      }
    )
  })
}

// patch方法
export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'patch',
      url: url,
      data: data
    }).then(
      res => {
        resolve(res.data)
      },
      err => {
        reject(err)
        message.error(err)
      }
    )
  })
}

// delete方法
export function del (url) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'delete',
      url: url
    }).then(
      res => {
        resolve(res.data)
      },
      err => {
        reject(err)
        message.error(err)
      }
    )
  })
}

// let urldatatmep = [
//   {
//     url: `${this.api.API_GETHOMEDATA1}?partnerType=1&page=1&limit=20&enabled=1`,
//     type: 'get',
//     param: {
//       id: '456'
//     }
//   },
//   {
//     url: `${this.api.API_GETHOMEDATA1}?partnerType=1&page=1&limit=20&enabled=1`,
//     type: 'post',
//     param: {
//       id: '456'
//     }
//   }
// ];
// let datatemp = await this.$fetchall(urldatatmep);
export function fetchall (urlarray) {
  const requests = urlarray.map(makeRequest)
  function makeRequest (item) {
    if (item.type.toLowerCase() === 'get') {
      return axios({
        method: 'get',
        url: item.url,
        params: item.params
      })
    } else {
      return axios({
        method: 'post',
        url: item.url,
        data: item.params
      })
    }
  }
  //
  return new Promise((resolve, reject) => {
    axios
      .all(requests)
      .then(
        axios.spread((...res) => {
          resolve(res)
        })
      )
      .catch(err => {
        message.error(err)
      })
  })
}

// get多个接口并发方法
export function getall (urlarray) {
  const requests = urlarray.map(makeRequest)
  function makeRequest (url) {
    return axios({
      method: 'get',
      url: url,
      params: {}
    })
  }
  return new Promise((resolve, reject) => {
    axios
      .all(requests)
      .then(
        axios.spread((...res) => {
          resolve(res)
        })
      )
      .catch(err => {
        message.error(err)
      })
  })
}

// post多个接口并发方法
// TODO 待测试
export function postall (urlarray) {
  const requests = urlarray.map(makeRequest)
  function makeRequest (val) {
    return axios({
      method: 'post',
      url: val.url,
      data: val.data
    })
  }
  return new Promise((resolve, reject) => {
    axios
      .all(requests)
      .then(
        axios.spread((...res) => {
          resolve(res)
        })
      )
      .catch(err => {
        message.error(err)
      })
  })
}

// 上传
export function uploadfile (url, file, data = {}) {
  const formData = new FormData() // eslint-disable-line
  formData.append('file', file)
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: url,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(
      res => {
        resolve(res)
      },
      err => {
        message.error(err)
      }
    )
  })
}
