// pages/addressList/addressList.js
var xiugaiaddress = null;
Page({
  data: {
    addressList: [],
    'checkAll': false,
    'totalCount': 0,
     checked: false,
    'totalPrice': 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr = wx.getStorageSync('addressList') || [];
    console.info("缓存数据：" + arr);
    // 更新数据  
    this.setData({
      addressList: arr
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onLoad();
  },
  checkIt: function (){
    this.setData({
      checked: !this.data.checked
    })
  },

  addAddress: function () {
    wx.navigateTo({ url: '/pages/address/address' });
  },
  /* 删除item */
  delAddress: function (e) {
    this.data.addressList.splice(e.target.id.substring(3), 1);
    // 更新data数据对象  
    if (this.data.addressList.length > 0) {
      this.setData({
        addressList: this.data.addressList
      })
      wx.setStorageSync('addressList', this.data.addressList);
    } else {
      this.setData({
        addressList: this.data.addressList
      })
      wx.setStorageSync('addressList', []);
    }
  },

  checkboxChange: function (e) {
    var that = this;
    var index = e.detail.value
   
    var consignee = that.data.addressList[index].consignee;
    var mobile = that.data.addressList[index].mobile;
    var transportDay = that.data.addressList[index].transportDay;
    var address = that.data.addressList[index].address;

    console.log(consignee + "," + mobile + "," + address + "," + transportDay); //输出该文本 
    var arr = wx.getStorageSync('address') || [];
    console.log("arr,{}", arr);
    address = {
      consignee: consignee,
      mobile: mobile,
      address: address,
      transportDay: transportDay
    }
    arr.push(address);
    wx.setStorageSync('address', arr);
    wx: wx.navigateTo({
      url: '/pages/orderdetail/orderdetail',

    })
  },

  xiugai: function (e) {
    wx.showToast({
      title: '修改地址',
    })
    var that = this;
    var index = e.target.dataset.index;
    console.log(e.target.dataset.index);
    var consignee = that.data.addressList[index].consignee;
    var mobile = that.data.addressList[index].mobile;
    var address = that.data.addressList[index].address;
    
    console.log(consignee + "," + mobile); //输出该文本 
    var arr = wx.getStorageSync('xiugaiaddress') || [];
    console.log("arr,{}", arr);
    xiugaiaddress = {
      consignee: consignee,
      mobile: mobile,
      address: address
      
    }
    arr.push(xiugaiaddress);
    wx.setStorageSync('xiugaiaddress', arr);
    wx: wx.navigateTo({
      url: 'pages/address/address',

    })
  },

})