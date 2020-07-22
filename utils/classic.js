import HTTP from '../http/http.js'
class Classic extends HTTP {
  getClassicList(callback) {
    this.request({
      url: 'calssic/latest',
      success: (res) => {
        callback(res)
      }
    })
  }
}

export default Classic;


// import {
//   ClassicModel
// } from '../../models/classic.js'
// import {
//   LikeModel
// } from '../../models/like.js'

// const classicModel = new ClassicModel()

// classicModel.getClassic(index, nextOrPrevious, (res) => {
//   this._getLikeStatus(res.id, res.type)
//   this.setData({
//     classic: res,
//     latest: classicModel.isLatest(res.index),
//     first: classicModel.isFirst(res.index)
//   })
// })