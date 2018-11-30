// mi_channel_orderdetail/mi_channel_orderdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:[],
    invoicegeren:[],
    invoicegeren:true,
    address:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //收货地址
    var arr = wx.getStorageSync('address') || [];
    console.info("缓存数据：" + arr);
    // 更新数据  
    this.setData({
      address: arr.reverse()
    });
  // 发票缓存接收
    var arr = wx.getStorageSync('invoicegeren') || []
    console.info("缓存数据：" + arr);
    // 更新数据  
    this.setData({
      invoicegeren: arr.reverse()
    });
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
    this.onLoad();
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