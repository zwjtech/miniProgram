const app = getApp()
Page({
    data: {
    },
    doRegist: function(e){
      var formObject=e.detail.value;
      var username =formObject.username;
      var password=formObject.password;
      // 简单验证
        if(username.length==0||password.length==0){
          wx.showToast({
            title: '用户名和密码不能为空！',
            icon: 'none',
           //延迟时间
            duration: 3000,
          })
        }
        else{
          var serverUrl=app.serverUrl;
          wx.request({
            url: serverUrl+'/regist',//此次对应后端提供接口
            method: "POST",//此次对应后端提供接口
            data:{
              username: username,
              password: password
            },
            header:{
              'content-type': 'application/json' // 默认值
            },
            success:function(res){
              console.log(res.data);
            }
          })
        }
    }
})