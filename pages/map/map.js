Page({
  data: {
    scale: 14,
    longitude: 120.131441,
    latitude: 30.279383,
    markers: [{
      iconPath: "/image/green_tri.png",
      id: 10,
      latitude: 30.279383,
      longitude: 120.131441,
      width: 50,
      height: 50
    },{
      iconPath: "/image/green_tri.png",
      id: 10,
      latitude: 30.279383,
      longitude: 120.131441,
      width: 50,
      height: 50,
      customCallout: {
        type: 1,
        time: '1',
      },
      fixedPoint:{
        originX: 400,
        originY: 400,
      },
      iconAppendStr: '黄龙时代广场黄龙时代广场黄龙时代广场黄龙时代广场test'
    }],
    includePoints: [{
      latitude: 30.279383,
      longitude: 120.131441,
    }],
    polyline: [{
      points: [{
        longitude: 120.131441,
        latitude: 30.279383
      }, {
        longitude: 120.128821,
        latitude: 30.278200
      }, {
        longitude: 120.131618,
        latitude: 30.277600
      }, {
        longitude: 120.132520,
        latitude: 30.279393
      }, {
        longitude: 120.137517,
        latitude: 30.279383
      }],
      color: "#FF0000DD",
      width: 5,
      dottedLine: false
    }],
    circles: [{
      latitude: 30.279383,
      longitude: 120.131441,
      color: "#000000AA",
      fillColor: "#000000AA",
      radius: 80,
      strokeWidth: 5,
    }],
    controls: [{
      id: 5,
      iconPath: '../../resources/pic/2.jpg',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  
  onReady(e) {
    // 使用 my.createMapContext 获取 map 上下文
    this.mapCtx = my.createMapContext('map')
  },
  
  getCenterLocation() {
    this.mapCtx.getCenterLocation(function (res) {
      console.log(res.longitude)
      console.log(res.latitude)
    })
  },
  
  moveToLocation() {
    this.mapCtx.moveToLocation()
  },
  
  regionchange(e) {
    console.log('regionchange', e);
	// 注意：如果缩小或者放大了地图比例尺以后，请在 onRegionChange 函数中重新设置 data 的
	// scale 值，否则会出现拖动地图区域后，重新加载导致地图比例尺又变回缩放前的大小。
	if (e.type === 'end') {
      this.setData({
        scale: e.scale
      });
    }
  },
  
  markertap(e) {
    console.log('marker tap', e);
  },
  
  controltap(e) {
    console.log('control tap', e);
  },
  
  tap() {
    console.log('tap:');
  },
  
  changeScale() {
    this.setData({
      scale: 8,
    });
  },
  
  changeCenter() {
    this.setData({
      longitude: 113.324520,
      latitude: 23.199994,
      includePoints: [{
        latitude: 23.199994,
        longitude: 113.324520,
      }],
    });
  },
  //支持地图不接受手势事件, isGestureEnable为1 表示支持，为0表示不支持
  gestureEnable() {
    this.mapCtx.gestureEnable({isGestureEnable:1});
  },
  //地图是否显示比例尺, showsScale 为1表示显示，为0表示不显示
  showsScale() {
    this.mapCtx.showsScale({isShowsScale:1});
  },
  //地图是否显示指南针, showsCompass 为1表示显示，为0表示不显示
  showsCompass() {
    this.mapCtx.showsCompass({isShowsCompass:1});
  },
  changeMarkers() {
    this.setData({
      markers: [{
        iconPath: "/image/green_tri.png",
        id: 10,
        latitude: 21.21229,
        longitude: 113.324520,
        width: 50,
        height: 50
      }],
      includePoints: [{
        latitude: 21.21229,
        longitude: 113.324520,
      }],
    });
  },
})