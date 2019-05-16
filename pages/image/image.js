Page({
  data: {
    array: [{
      mode:'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放，使图片完全适应',
    },{
      mode: 'aspectFit',
      text: 'aspectFit：保持纵横比缩放，使图片的长边能完全显示出来',
    },{
      mode: 'aspectFill',
      text: 'aspectFill：保持纵横比缩放，只保证图片的短边能完全显示出来',
    }, {
      mode: 'top',
      text: 'top：不缩放图片，只显示顶部区域'
    }, {
      mode: 'bottom',
      text: 'bottom：不缩放图片，只显示底部区域'
    }, {
      mode: 'center',
      text: 'center：不缩放图片，只显示中间区域'
    }, {
      mode: 'left',
      text: 'left：不缩放图片，只显示左边区域'
    }, {
      mode: 'right',
      text: 'right：不缩放图片，只显示右边边区域'
    }, {
      mode: 'top left',
      text: 'top left：不缩放图片，只显示左上边区域'
    }, {
      mode: 'top right',
      text: 'top right：不缩放图片，只显示右上边区域'
    }, {
      mode: 'bottom left',
      text: 'bottom left：不缩放图片，只显示左下边区域'
    }, {
      mode: 'bottom right',
      text: 'bottom right：不缩放图片，只显示右下边区域'
    }],
    src: 'https://cdn.pixabay.com/photo/2018/05/20/16/13/dandelion-3416140__480.jpg'
  },
  imageError: function(e) {
    console.log('err: '+ e.detail.value)
  },
  imageLoad: function(e) {
    console.log('succcess: '+ e)
  },
})