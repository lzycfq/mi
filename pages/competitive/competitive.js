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

  

  onShareAppMessage: function (e) {
    var that=this
    var index = parseInt(e.target.dataset.index);
    console.log(index);
  
    console.log(that.data.competitive_list[index].header)
    console.log(that.data.competitive_list[index].cimg)

    return {
      title: "我发现了一个好物，赶快看看吧" +that.data.competitive_list[index].header,
      path: 'pages/goods/show?{{item.showid}}',
      imageUrl: that.data.competitive_list[index].cimg
    }
  }

})