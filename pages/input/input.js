Page({
  data: {
    focus: false,
    inputValue: '',
    radio: [
      {name:'1',value: 'a'},
      {name:'2',value: 'b'},
      {name:'3',value: 'c'},
      {name:'4',value: 'd'},
      {name:'5',value: 'e'},
      {name:'6',value: 'f'},
    ],
    checkBox: [
      {name:'a',value: '1'},
      {name:'b',value: '2',checked: true},
      {name:'c',value: '3',disabled: true},
      {name:'d',value: '4'},
      {name:'e',value: '5'},
      {name:'f',value: '6'},
    ],

  },
  bindButtonTap() {
    this.setData({
      focus:true,
    });
  },
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },
  radioChange(e) {
    console.log('你选择的 radio 是 ' + e.detail.value)
  },
  checkboxChange(e) {
    my.alert({
      title: `你选择 checkbox 是 ${e.detail.value}`,
    })
  }
});