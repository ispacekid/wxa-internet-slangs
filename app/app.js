const app = getApp()
const AV = require('./libs/leancloud/av-weapp-min.js')

App({
  globalData: {
    appInfo: {
      "name": "网络用语词典",
      "version": "0.5.0 Developer Beta",
      "copyright": "© 2017 太空小孩"
    },
    userInfo: null
  },
  getUserInfo: function(cb) {
    var that = this
    if(this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      // 调用登录接口
      wx.login({
        success: function() {
          wx.getUserInfo({
            success: function(res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  onLaunch: function() {
    // 使用前将你的 LeanCloud App ID 与 App Key 替换此处配置
    var config = require('config.js')
    AV.init({
      appId: config.appId,
      appKey: config.appKey
    })
  }
})
