Page({
  data: {
    array: ['China', 'America', 'Japen', 'Brazil'],
    objectArray: [
      {
        id: 0,
        name: 'America',
      },
      {
        id: 0,
        name: 'China',
      },
      {
        id: 0,
        name: 'Brazil',
      },
      {
        id: 0,
        name: 'Japen',
      }
    ],
    arrIndex: 0,
    index: 0,
  },
  onChange(e) {
    console.log(e.detail.value);
    this.setData({
      value: e.detail.value,
    })
  },
  bindPickerChange(e) {
    console.log(e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
   bindobjPickerChange(e) {
    console.log(e.detail.value);
    this.setData({
      arrIndex: e.detail.value,
    });
  },
})