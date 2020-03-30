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