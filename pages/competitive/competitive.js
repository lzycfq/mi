// pages/competitive/competitive.js
const app = getApp()
Page({

  data: {
    nav_data_competitive:[],
    competitive_list:[],
    maskHidden: false,
    answer: false
  },
  
// 触发分享js
  showAnswer: function () {
    this.setData({
      answer: true
    })
  },
  foldAnswer: function () {
    this.setData({
      answer: false
    })
  },
  onLoad: function (options) {
   var nav_data_competitive=app.globalData.nav_data_competitive
    var competitive_list = app.globalData.competitive_list
      console.log(nav_data_competitive)
      this.setData({
      nav_data_competitive,
        competitive_list
      });
  },

  

  onShareAppMessage: function () {
    var index=this.data.index
    console.log(index)
    return {
      title: '',
      path: '/page/user?id=123'
    }
  }
  
})