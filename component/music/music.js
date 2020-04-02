// component/music/music.js
var BGMM = wx.getBackgroundAudioManager()
BGMM.title = '此时此刻'
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		src: {
			type: String,
			value: '/pages/assets/music/suyan.mp3'
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		playStateText: "播放"
	},

	lifetimes: {
		attached() {
			// 在组件实例进入页面节点树时执行
			BGMM.src = this.properties.src
			console.log(this.properties.src)
			console.log(BGMM)
		}
	},
	/**
	 * 组件的方法列表
	 */
	methods: {

	}
})
