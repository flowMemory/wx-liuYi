import HTTP from '../../../utils/http.js';
const app = getApp();
class CouponDetailServerModel extends HTTP {
	
	getCouponDetail(sCallback, id) {
		let data = {
			url: '/small/getCouponDetail.action?detailVo.id=' + id,
			data: {
				miniAppid: app.globalData.miniAppid,
				miniOpenid: wx.getStorageSync('5iopenid'),
				sid: wx.getStorageSync('sid'),
				v: 2
			},
			callBack: function (res) {
				sCallback(res)
			}
		}
		this.request(data)
	}

}
export {
	CouponDetailServerModel
}