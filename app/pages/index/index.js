const app = getApp()
const AV = require('../../libs/leancloud/av-weapp-min.js')

Page({
  data: {
    entries: []
  },
  // 跳转详情页
  touchEntry: function(event) {
    var entryId = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '../entry/entry?entryId=' + entryId
    })
  },
  // 监听页面加载
  onLoad: function() {
    var query = new AV.Query('entry')
    query
      .ascending('meta.collectionDate')
      .find()
      .then(entries => this.setData({ entries }))
      .catch(console.error)
    console.log('Index Page: onLoad.')
  },
  // 监听页面初次渲染完成
  onReady: function() {
    console.log('Index Page: onReady.')
  },
  // 监听页面显示
  onShow: function() {
    console.log('Index Page: onShow.')
  },
  // 监听页面隐藏
  onHide: function() {
    console.log('Index Page: onHide.')
  },
  // 监听页面卸载
  onUnload: function() {
    console.log('Index Page: onUnload.')
  },
  // 监听用户下拉刷新动作
  onPullDownRefresh: function() {
    console.log('Index Page: onPullDownRefresh.')
  }
})
