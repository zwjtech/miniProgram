//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World,test',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    arr:[1,2,3,4,5,6],
    shopping_combination: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  clickMe() {
    this.setData({ msg: 'Hello World' })
  },

  cliektToTest: function () {
    wx.navigateTo({
      url: '../test/test'
    })
  },
  clickToVideo: function () {
    wx.navigateTo({
      url: '../video/index'
    })
  },
  clickToBaidu: function(){
    wx.request({
      url: 'http://www.baidu.com',
      success: function(res){
        console.log(res)//服务器回包信息
      }

    })
  },
  clickToMyServer: function () {
    wx.request({
      url: 'http://localhost:8080/hello',
      success: function (res) {
        console.log(res)//服务器回包信息
      }

    })
  },

  clickToInterface1: function () {
    wx.request({
      url: 'http://localhost:8080/hello',
      data:{'id':1,'version':'1.1.0'},
      success: function (res) {
        console.log(res)//服务器回包信息
      }

    })
  },
  clickToInterface2: function () {
    wx.request({
      url: 'http://localhost:8080/user/regist',
      method:'POST',
      header:{'contentType':'application/json'},
      data: { id: '1', version: '1.1.0' },
      success: function (res) {
        console.log(res)//服务器回包信息
      }

    })
  },
 

  clickToInterface3: function () {//获取json数据
    var that = this//把this对象复制到临时变量that
    wx.request({
      url: 'http://localhost:8080/user/shopping-combination',
      method: 'POST',
      header: { 'contentType': 'application/json' },
      data: {
        "brand": "XX",
        "bedclothes": "123",
        "fabric": "2ASD",
        "style": "123W",
        "advancedOptions": ["1231", "DSFS", "12SSD"]
      },
      success: function (res) {
        console.log(res)//服务器回包信息
        that.setData({
          shopping_combination: res.data.data
        })
      }//将返回的数据拼接到现有数据后面

    })
  },
})
