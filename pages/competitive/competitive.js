// pages/competitive/competitive.js
const app = getApp()
Page({

  data: {
    nav_data_competitive:[]
  },

  onLoad: function (options) {
   var nav_data_competitive=app.globalData.nav_data_competitive
      console.log(nav_data_competitive)
      this.setData({
      nav_data_competitive,
      });
  },
  onShareAppMessage: function () {

  }
})