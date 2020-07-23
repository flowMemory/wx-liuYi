// 封装 http ajax 请求基类
// 参数补充说明
// moreState：考虑到个别接口的返回state不是0也要页面处理，不能作为异常处理
// loading： 需要loading的接口传入该参数
// 添加对接口异常全局处理机制，很大程度精简页面写法
import interface_url from '../config/config.js'
class HTTP {
	request({ url, type = "application/json", data, callBack, moreState = null, loading}) {
    wx.request({
			url: interface_url + url,
      header: {
				'Content-Type': type
      },
      data: data,
      success: (res => {
		callBack && callBack(res)
      }),
      fail: (error) => {
		  console.log(error)
      }
    })
  }
}
export default HTTP;