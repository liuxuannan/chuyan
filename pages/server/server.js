var adds = {};
Page({
  data: {
   src:''//上传图片的路径
  },
  chooseImage:function(){
    var that=this
    wx.chooseImage({
      count:1,
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success:function(res){
        let src=res.tempFilePaths[0]
        that.setData({src:src})
      }
    })
  },

  uploadFile:function(){
    var that=this
    let src=this.data.src
    if(src==''){
      wx.showToast({
        title:'请先选择文件',
        icon:'none'
      })
    }
    else{
      var uploadTask=wx.uploadFile({
        url:'',
        filePath:src,
        name:'file',
        success:function(res){
          console.log(res)
          wx.showToast({
            title:res.data
          })
        }
      })
      //监听文件上传进度
      uploadTask.onProgressUpdate((res) => {
        console.log('上传进度', res.progress)
        console.log('已经上传的数据长度',res.totalBytesSent)
        console.log('预期需要上传的数据总长度',res.totalBytesExpectedToSend)
    
      })
    }
  }

 

  })