Page({
  data: {
    text: `I liked rain before.
           But now, I don't wanna to imagine the screen.
           Just like feeling`,
    iconSize: [20, 30, 40, 50, 60],
    iconColor: [
      'red', 'yellow', 'blue', 'green'
    ],
    iconType: [
      'success',
      'info',
      'warn',
      'waiting',
      'clear',
      'success_no_circle',
      'download',
      'cancel',
      'search',
    ],
    nodes: [{
      name:'div',
      attrs: {
        style: 'color: lightBlue;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }],
  },
  tap() {
    console.log('tap')
  }
})