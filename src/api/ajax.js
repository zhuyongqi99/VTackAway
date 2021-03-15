/*
 ajax 请求函数模块
 返回值： promise对象 (异步返回的数据是：response.data)
*/
import axios from 'axios'
// export default function ajax(url, data={}, type='GET') {
//   let promsie
//   if (type === 'GET') {
//     // 准备url query参数数据
//     let dataStr = '' // 数据拼接字符串
//     // 拼接参数
//     Object.keys(data).forEach(key => {
//       dataStr += key + '=' + data[key] + '&'
//     })
//     // 把参数拼到url上
//     if (dataStr !== '') {
//       dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
//       url = url + '?' + dataStr
//     }
//     // 发送get请求
//     promise = axios.get(url)
//   } else {
//     // 发送post请求
//     promise = axios.post(url, data)
//   }
//   return promsie
// }
/*
 // axios给我们返回的是一个response，我们还要自己去取response.data
 const response = await ajax()
 const result = response.data
 // 我们想要直接获取返回的就是 response.data，解决办法就是我们在封装一层 Promise,
 // Promise对象里执行一个Promise对象，里面的Promise成功则外层返回它成功数据的我们需要的部分，失败返回失败信息
 const result = await ajax()
*/
export default function ajax(url, data={}, type='GET') {
  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求
    let promsie
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' // 数据拼接字符串
      // 拼接参数
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      // 把参数拼到url上
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    promsie.then(function (response) {
      // 成功了调用resolve()
      resolve(response.data)
    }).catch(function (error) {
      // 失败了调用reject()
      reject(error)
    })
  })
}
