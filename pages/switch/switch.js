// pages/switch/switch.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		activeItem: 'left'
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.animation1()
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	// 场景切换
	switchCons(evt) {
		this.setData({
			activeItem: evt.target.dataset.item
		})
	},
	// 页面js动画
	animation1() {
		this.animate('#container', [
			{ opacity: 1.0, rotate: 0, backgroundColor: '#FF0000' },
			{ opacity: 0.5, rotate: 45, backgroundColor: '#00FF00' },
			{ opacity: 0.0, rotate: 90, backgroundColor: '#FF0000' },
		], 5000, function () {
				this.clearAnimation('#container', { opacity: true, rotate: true }, function () {
				// 清除属性的参数不生效, 必须全部清除
				console.log("清除了#container上的opacity和rotate属性")
			})
		}.bind(this))

	}

})