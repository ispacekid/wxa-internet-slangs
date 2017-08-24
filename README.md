# 网络用语词典 - 微信小程序

## 介绍 Introduction

一款基于[微信小程序](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)开发的网络用语科普与查询工具，是本人先前[《网络用语词典》](http://spacekid.me/internet-slangs/)作品的微信小程序版本。

## 使用方法 Usage

1. 克隆项目仓库

``` bash
$ git clone https://github.com/ispacekid/wxa-internet-slangs.git
```

2. 导入微信 web 开发者工具（[下载地址](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html)）

3. 接入 LeanCloud App ID 与 App Key

在 app.js 中进行配置：

``` javascript
AV.init({
  appId: "App ID",
  appKey: "App Key"
})
```

## 开发计划 Development Plan

- [x] 详情页的富文本排版
- [x] 详情页支持显示图片、音频、视频的多媒体附件
- [x] 底部 tab 栏
- [x] 关于页面
- [x] 词条搜索功能
- [x] 接入 LeanCloud 后端云服务
- [ ] 下拉刷新、上拉加载更多
- [ ] 长按保存图片
- [ ] 词条点赞
- [x] 词条评论
- [ ] 词条收藏
- [ ] 词条分享
- [ ] 词条打赏
- [ ] 客服接口

## 协议 License

[GPL v3](LICENSE)
