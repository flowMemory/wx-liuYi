// component/auth/auth.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hasAuth: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  // 生命周期
  lifetimes: {
    created() {

    },
    attached() {
      // 在组件实例进入页面节点树时执行
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getUserInfo: function (e) {
      let userInfo = e.detail.userInfo
      app.globalData.userInfo = userInfo
      this.triggerEvent('bindAuthEvent', userInfo)
    }
  }
})
