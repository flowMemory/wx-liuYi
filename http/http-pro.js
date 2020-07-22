// 封装 http ajax 请求基类
import config from '../config/config.js'
class HTTP {
    request({url, data={}, method='GET'}) {
		return Promise((resolve, reject) => {
			this._request(url, data, resolve, reject, method)
		})
	}
	_request(url, data, resolve, reject, method='GET') {
		wx.request({
			url: congfig.base_url + url,
			method: method,
			header: {
				key: config.key
			},
			data: data,
			success: (res => {
				resolve(res)
			}),
			fail: (error) => {
				reject()
				console.log(error)
			}
		})
	}
}
export default HTTP;