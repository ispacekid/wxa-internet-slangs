const app = getApp()
const AV = require('../../libs/leancloud/av-weapp-min.js')
const util = require('../../libs/util.js')

Page({
  data: {
    item: {},
    attachments: {},
    footnotes: {},
    userInfo: {},
    comments: [],
    commentObj: {}
  },
  // 监听页面加载
  onLoad: function(options) {
    // 获取用户信息
    var that = this
    app.getUserInfo(function(userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
    // 获取词条数据
    var query = new AV.Query('entry')
    query
      .get(options.entryId)
      .then(item => {
        this.setData({
          item,
          attachments: item.get('attachments'),
          footnotes: item.get('footnotes'),
        })
      })
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
  // 评论框输入事件
  commentInput: function(e) {
    this.data.commentObj.author = this.data.userInfo;
    this.data.commentObj.commentStr = e.detail.value;
    this.data.commentObj.createdAt = new Date();
    this.data.commentObj.formatDate = util.formatTime(this.data.commentObj.createdAt);
    // console.log(this.data.commentObj)
  },
  // 评论框提交事件
  commentSubmit: function(e) {
    if(!this.data.commentObj.commentStr || this.data.commentObj.commentStr === '') {
      wx.showToast({
        title: '请输入内容',
        icon: 'success',
        duration: 2000
      });
      return false;
    }
    // 提交评论
    this.data.comments.unshift(this.data.commentObj);
    var query = AV.Object.createWithoutData('entry', this.options.entryId);
    query
      .add('comments', this.data.comments)
    query
      .save()
      .then(item => {
        wx.redirectTo({
          url: './entry?entryId=' + this.options.entryId
        });
      }, (error) => {
        throw error;
      });
    // console.log(this.data.comments)
    console.log('Entry Page: Submitted comment.')
  }
})
