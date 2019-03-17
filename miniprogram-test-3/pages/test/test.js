var common = require("../../common/common.js");
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"红太阳家纺",
    password:null,
    bool:true,
    obj1:{
      a:1,
      b:2
    },
    obj2:{
      index:1001,
      msg:"红太阳家纺欢迎你！",
      time:20190317
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        password: app.globalData.password
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  
  sayHello:function(){
      common.sayHello(this.data.name)
  },


  sayBye:function(){
    common.sayBye(this.data.name)
  },

  show:function(){
    this.setData({
      bool:!this.data.bool
    })
  }

})