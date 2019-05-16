Component({
  data: {
	counter: 5,
  name:''
  },
  // onInit() {
  //   console.log(onInit, 该分支未执行)
	//   this.setData({
	//   counter: 1,
	//   is: this.is,
	//   });
  // },
  // deriveDataFromProps(nextProps) {
  // console.log(nextProps.pCounter, 该分支未执行)
	// if (this.data.counter < nextProps.pCounter) {
    
	//   this.setData({
	// 	counter: nextProps.pCounter,
	//   });
	// }
  // },
  didMount() {
    // console.log(my.canIUse('onInit'));
    let that = this;
    my.request({
      url: 'http://myjson.com/13kdqy',
      success: function(res) {
		    console.log(res);
        that.setData({name: 'xiaoming'});               
      }
      // fail: function(err) {
		  //   console.log(err);
      //   that.setData({err: 'err'});               
      // },
    });
  },
  didUpdate(prevProps, prevData) {
    console.log(prevProps, this.props, prevData, this.data);
  },
  didUnmount() {
    console.log(this);
  },
})