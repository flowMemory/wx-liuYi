
Page({

	data: {
		activeItem: 'left'
	},

	onLoad: function (options) {
		this.animation1()
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
			{ translateY: '-100px', },
			{ translate3d: ['-100px, 100px, 0'] },
		], 5000, function () {
				console.log(123)
				this.clearAnimation('#container', { opacity: true, rotate: true }, function () {
					// 清除属性的参数不生效, 必须全部清除
					console.log("清除了#container上的opacity和rotate属性")
				})
		}.bind(this))
	}

})