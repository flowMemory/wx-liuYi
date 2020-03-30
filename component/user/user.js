// pages/components/user/user-pic.js
import userBeh from '../Behavior/behavior.js'
Component({
	/**
	 * 组件的属性列表 - 暴露给外部的数据接口
	 */
  behaviors: [userBeh],
	properties: {
		careNum: {
			type: Number,
			value: 1
		},
    userImg: {
			type: String,
      value: '../images/user.jpg',
      observer(newVal, oldVal) {
        //console.log('newVal' + newVal)
        //console.log('oldVal' + oldVal)
      }
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},
  lifetimes: {
		// 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function (){
			// console.log(this.properties.careNum)
			this.setData({
				careNum: 88
			})
		},
    moved: function () { },
    detached: function () { },
  },
	/**
	 * 组件的方法列表
	 */
	methods: {

	}
})
