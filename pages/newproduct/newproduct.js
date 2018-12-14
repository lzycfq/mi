// pages/newproduct/newproduct.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    navbar: ['新品', '电视', '笔记本', '智慧生活','运动健康'],
    currentNavbar: '0',
    newfirst:[],
    imgUrls:[]
  },
  /**
   * 切换 navbar
   */
  swichNav(e) {
    this.setData({
      currentNavbar: e.currentTarget.dataset.idx
    })
    if (e.currentTarget.dataset.idx == 1 && this.data.latest_list.length == 0) {
      this.pullUpLoadLatest()
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var newfirst = app.globalData.newfirst
    var imgUrls = app.globalData.imgUrls
    this.setData({
      newfirst,
      imgUrls
    })
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

  }
})