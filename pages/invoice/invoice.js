// page/invoice/invoice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected:true,
    selected1:false,
    invoicegeren:[]
  },
  selected: function (e) {

    this.setData({

      selected1: false,


      selected: true

    })

  },

  selected1: function (e) {

    this.setData({

      selected: false,
    

      selected1: true

    })

  },

  formSubmitgeren: function (e) {
    var that = this;
    var invoicegeren = e.detail.value.name;
    var name = e.detail.value.name;
    console.log(e.detail.value.name)

    var arr = wx.getStorageSync('invoicegeren') || [];
    invoicegeren = {
      name: name
    }
    arr.push(invoicegeren);
    wx.setStorageSync('invoicegeren', arr);
    wx: wx.navigateTo({
      url: '/page/mi_channel_Orderdetail/mi_channel_Orderdetail',

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  }
})