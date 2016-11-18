var app = getApp()
app.globalData.api.data

Page({
  data: {
    item: {},
    attachments: {},
    footnotes: {}
  },
  onLoad: function(options) {
    // 设定数据
    this.setData({
      item: app.globalData.api.data[Number(options.index)],
      attachments: app.globalData.api.data[Number(options.index)].attachments,
      footnotes: app.globalData.api.data[Number(options.index)].footnotes
    }),
    // 设定导航栏标题
    wx.setNavigationBarTitle({
      title: app.globalData.api.data[Number(options.index)].title
    })
  }
})
