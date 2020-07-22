//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'http://localhost:3000/v1/token',
          method: "post",
          data: {
            account: res.code,
            type: 100
          },
          success: function(res) {
            console.log(res)
          },
          fail: function(error) {
            console.log(error)
          }
        })
      },
      fail: function (error) {
        console.log(error)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // 获取地理定位
    this.getCurrLocation2()
  },
  // 方式1
  getCurrLocation() {
    wx.getSetting({
      success: (res) => {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success () {
              console.log('同意授权地理定位！')
            }
          })
        }
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },
  // 方式2
  getCurrLocation2() {
    wx.getLocation({
      success: function(res) {
        //console.log('获取地理位置成功')
      },
      fail:function(res){
        console.log(res)
      }
    })
  },
  globalData: {
    userInfo: null,
    location: ''
  }
})