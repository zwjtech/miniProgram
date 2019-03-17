App({
  onLaunch: function () {
     wx.getBackgroundAudioPlayerState({
       success: function(res) {},
       fail: function(res) {},
       complete: function(res) {},
     })
  }
})
