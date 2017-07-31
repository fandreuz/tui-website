const Fairybread = require('fairybread')

function styles(t, s, v) {
  const bgImg = '/imgs/default-bg.jpg'
  if (typeof t !== 'undefined' && typeof s !== 'undefined') {
    const sheet = new Fairybread('local')
    Object.keys(t).map((key) => {
      const splitKey = key.split('_')
      console.log(key,  v.overlay)
      if (key === 'bg_color' && v.overlay === false) {
        sheet.add(``, `
        background-color:${t[key]}; `)
      }
      if (key === `overlay_color` && v.overlay === true) {

        sheet.add(`.bg_image`, `
        background-image:url('${bgImg}');
        background-position: 0px 65%;
         `)
        sheet.add(`.${key}`, `
          background-color:${t[key]};
        `)
      }
      if (splitKey[1] !== 'bg' && splitKey[1] !== 'overlay') {
        sheet.add(`.${key}`, `color:${t[key]};`)
      } else {
        sheet.add(`.${key}`, `background-color:${t[key]};`)
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