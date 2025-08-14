// app.js
App({
  onLaunch() {
    console.log("onLaunch: 监听小程序初始化")
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onShow(){
    console.log("onShow:监听小程序启动或切前台。")
  },
  onHide(){
    console.log("onHide:监听小程序切后台。")
  },
  onError(err){
    console.log("onError:错误监听函数:"+err)
  },
  globalData: {
    userInfo: null
  }
})
