const Fairybread = require('fairybread')

function styles(t, s) {
  const bgImg = '/imgs/default-bg.jpg'
  if (typeof t !== 'undefined' && typeof s !== 'undefined') {
    const sheet = new Fairybread('local')
    Object.keys(t).map((key) => {
      const splitKey = key.split('_')
      if (splitKey[1] !== 'bg') {
        sheet.add(`.${key}`, `color:${t[key]};`)
      } else {
        sheet.add(`.${key}`, `background-color:${t[key]};`)
      }
      if (key === 'bg_color') {
        sheet.add(``, `background-image:url(); background-color:${t[key]}; `)
      }
    })
    Object.keys(s).map((key) => {
      const splitKey = key.split('_')
      if (splitKey[1] !== 'bg') {
        sheet.add(`.${key}`, `color:${s[key]};`)
      } else {
        sheet.add(`.${key}`, `background:${s[key]};`)
      }
    })
    sheet.render()
    return sheet.id
  }
}

module.exports = styles