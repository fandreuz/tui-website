const sv = require('../../../style/vars')
const Fairybread = require('fairybread')

function styles() {
  const sheet = new Fairybread('local')
  sheet.add('', `
        display:inline-block;
        text-align:center;
        padding-bottom:4em;
        max-width:100%;
      `)
  sheet.add('.theme_preview', `
        max-width:300px;
        margin: 0 auto;
      `)
  sheet.add('.theme_settings', `
        float:left;
        padding-bottom:1em;
      `)
  sheet.add('li', `
        display:inline-block;
        padding:0 1em;
      `)
  sheet.add('.pallet', `
        white-space: nowrap;
        overflow-x: auto;
      `)
  // Theme Builder Form
  const formStyle = `padding: 1em;
      position: relative;
      display: inline-block;
      max-width: 175px;
      min-height: 40px;
      border: 1px solid;
      margin: 0px 5px 5px 0px;
      width: 27vw;`
  const formLabelStyle = `
        padding:1em;
        position:absolute;
        background:#000;
        bottom:0px;
        left:0px;
  `
  sheet.add('.swatch', formStyle)
  sheet.add('.swatch label', formLabelStyle)
  sheet.add('.swatch input[type="color"]', `
          position:absolute;
          top:0px;
          left:0px;
          width:100%;
          height:100%;
          opacity:0;
      `)
  sheet.add('.swatch button', `
    position:absolute;
    z-index:9;
    right:0px;
    border:0px;
    font-size:2em;
    color:${sv.textColor};
    background:none;
    top:0px;
    height: 32px;
    overflow: hidden;
  `)
  sheet.add('.swatch button:active', `
    background:${sv.textColor};
    color:#000;
  `)
  sheet.add('.swatch .minus', `
    top:auto;
    bottom: 0px;
    font-size: 3em;
    text-align: center;
  `)
  sheet.add('.checkbox', formStyle)
  sheet.add('.checkbox label', formLabelStyle)

  sheet.add('.setting', `
    background:${sv.textColor};
    color:#000;
    display:inline-block;
    padding:1em;
    margin: 0.5em;
    width:120px;
    clear:both;
    float:right;
  `)
  sheet.add('#downloads', `font-size:2em; padding:1em 0em;`)
  sheet.add('#downloads a', `
    cursor:pointer;
    clear:both;
    display:block;
    margin:1em;
  `)
  sheet.add('.themeString', `
    display:block;
    margin: 0 auto;
    border: 1px solid;
    max-width:700px;
  `)
  sheet.add('.publishForm', `
    margin-bottom: 2em;
    overflow: hidden;
    max-width:400px;
    margin: 0 auto;
  `)
  sheet.add('.publishForm li', `
  margin: 0.5em;
  float: left;
  clear: both;
  `)
  sheet.add('.publishForm li small', `
  min-width: 160px;
  display: inline-block;
  `)

  sheet.render()
  return sheet.id
}
module.exports = styles