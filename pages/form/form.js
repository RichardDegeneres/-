Page({
  data: {
    radio: {
      radio1: {  
        value: 1,
        name: 'labi'
      },
      radio2: {  
        value: 2,
        name: 'xiaoxin'
      },
    },
    checkbox: {
      checkbox1: {  
        value: 'a',
        name: 'yingtao'
      },
      checkbox2: {  
        value: 'b',
        name: 'xiaowanzi'
      },
    },
  },
  formSubmit: function(e) {
    console.log('form 发生了 submit 事件，携带数据为:',e.detail.value)
  },

  formReset: function(e) {
    console.log('form 发生了 reset 事件')
  }
})