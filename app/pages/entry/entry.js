var app = getApp()
app.globalData.api.data

Page({
  data: {
    item: {},
    attachments: {},
    footnotes: {}
  },
  // 监听页面加载
  onLoad: function(options) {
    console.log('Entry Page: onLoad.'),
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
  },
  // 监听页面初次渲染完成
  onReady () {
    console.log('Entry Page: onReady.')
  },
  // 监听页面显示
  onShow () {
    console.log('Entry Page: onShow.')
  },
  // 监听页面隐藏
  onHide () {
    console.log('Entry Page: onHide.')
  },
  // 监听页面卸载
  onUnload () {
    console.log('Entry Page: onUnload.')
  },
  // 监听用户下拉刷新动作
  onPullDownRefresh () {
    console.log('Entry Page: onPullDownRefresh.')
  },
})
