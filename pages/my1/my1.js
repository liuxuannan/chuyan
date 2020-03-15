// pages/my1/my1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioItems: [
      { name: 'A', value: 'A' },
      { name: 'B', value: 'B' },
      { name: 'C', value: 'C' },
      { name: 'D', value: 'D' }
    ],

    checkboxItems: [
      { name: '休闲风格', value: 'a' },
      { name: '日韩风格', value: 'b' },
      { name: '运动风格', value: 'c' },
      { name: '等等等等', value: 'd' }
    ]
  
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
  
  },
  /*
  
  */
  checkboxChange: function (e) {
    this.setData({ perference: e.detail.value })

  },

})