var app = getApp()

Page({
  data: {
    entries: app.globalData.api.data
  },
  // 跳转详情页
  touchEntry (e) {
    wx.navigateTo({
      url: '../entry/entry?index=' + e.currentTarget.dataset.index
    })
  }
})
