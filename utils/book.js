import HTTP from '../http/http-pro.js'
class Book extends HTTP {
  search(start, q) {
    return this.request({
      url: 'book/search?summary=1',
      data: {
        q: q,
        start: start
      }
    })
  }
}

export default Book;

// bookModel.search(this.data.book.id, comment)
//   .then(res => {
//     wx.showToast({
//       title: '+ 1',
//       icon: "none"
//     })

//     this.data.comments.unshift({
//       content: comment,
//       nums: 1
//     })

//     this.setData({
//       comments: this.data.comments,
//       posting: false
//     })
// })