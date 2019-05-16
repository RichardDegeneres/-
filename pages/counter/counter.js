Page({
  data: {
	counter: 1,
  },
  plus() {
	this.setData({ counter: this.data.counter + 1 })
  },
})