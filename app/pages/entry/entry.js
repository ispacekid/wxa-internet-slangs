const app = getApp()
const AV = require('../../libs/av-weapp-min.js')

Page({
  data: {
    item: {},
    attachments: {},
    footnotes: {}
  },
  // 监听页面加载
  onLoad: function(options) {
    var query = new AV.Query('entry')
    query
      .get(options.entryId)
      .then(item => this.setData({
        item,
        attachments: item.get('attachments'),
        footnotes: item.get('footnotes')
      }))
      .catch(console.error);
    console.log('Entry Page: onLoad.')
  },
  // 监听页面初次渲染完成
  onReady: function() {
    // 设定导航栏标题
    // wx.setNavigationBarTitle({
    //   title: this.data.item.title
    // })
    console.log('Entry Page: onReady.')
  },
  // 监听页面显示
  onShow: function() {
    console.log('Entry Page: onShow.')
  },
  // 监听页面隐藏
  onHide: function() {
    console.log('Entry Page: onHide.')
  },
  // 监听页面卸载
  onUnload: function() {
    console.log('Entry Page: onUnload.')
  },
  // 监听用户下拉刷新动作
  onPullDownRefresh: function() {
    console.log('Entry Page: onPullDownRefresh.')
  },
})
