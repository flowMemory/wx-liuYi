//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
		region: ['广东省', '广州市', '海珠区'],
		
		// map data
		markers: [{
			iconPath: "/image/location.png",
			id: 0,
			latitude: 23.099994,
			longitude: 113.324520,
			width: 50,
			height: 50
		}],
		polyline: [{
			points: [{
				longitude: 113.3245211,
				latitude: 23.10229
			}, {
				longitude: 113.324520,
				latitude: 23.21229
			}],
			color: "#FF0000DD",
			width: 2,
			dottedLine: true
		}],
		controls: [{
			id: 1,
			iconPath: '/image/location.png',
			position: {
				left: 0,
				top: 300 - 50,
				width: 50,
				height: 50
			},
			clickable: true
		}] 
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
  },
  onGetUserInfo(data) {
    this.setData({
      userInfo: data.detail,
      hasUserInfo: true
    })
  },
  showTips(title, cons) {
    wx.showToast({
      title: title,
      // 延迟的消失的时间
      duration: 15000
    })
  },
	bindRegionChange: function (e) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData({
			region: e.detail.value
		})
	},

	// 地图组件方法
	// 点击控件
	controltap(evt) {
		console.log(evt)
	},
	// 点击标记
	markertap(evt) {
		console.log(evt)
	},
	// 视野改变
	regionchange(evt) {
		console.log(evt)
	}

})
