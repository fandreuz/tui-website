function styles(sheet, sv) {
  // Helper Classes
  sheet.addSpecial(`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,700');`)
  sheet.add('a', `
    color:inherit;
    text-decoration:none;
  `)
  sheet.add('li,ul', `
    list-style:none;
    padding:0;
    margin:0;
  `)
  sheet.add('body', `
    margin:0px;
    padding:0px;
    font-size:10px;
    background:${sv.background};
    font-family: 'Roboto Mono', monospace;
    color:${sv.textColor};
  `)
  sheet.add('header', `
    font-size:2em;
    font-weight:300;
    text-align:center;
    display:inline-block;
    width:100%;
  `)
  sheet.add('h1,h2,h3', `
    font-weight:300;
  `)
}
module.exports = styles
