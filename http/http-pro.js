// 封装 http ajax 请求基类
import config from '../config/config.js'
class HTTP {
  // constructor()
  request(params) {
		return Promise((resolve, reject) => {
			this._request()
		})
		_request() {
			wx.request({
				url: congfig.base_url + params.url,
				header: {
					key: config.key
				},
				data: params.data,
				success: (res => {
					params.success(res)
				}),
				fail: (error) => {
					console.log(error)
				}
			})
		}
  }
}
export default HTTP;