function styles(sheet, sv) {
  // Helper Classes
  sheet.add('a', `
    color:inherit;
    text-decoration:none;
  `)
  sheet.add('input[type="text"]', `
   border:1px solid ${sv.textColor};
   background:#000;
   color: ${sv.textColor};
   font-size:.1.7em;
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
    font-family: 'lucida_consoleregular', monospace;
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
  sheet.add('.float-right', `
    float:right;
  `)
  sheet.add('.float-left', `
    float:left;
  `)
}
module.exports = styles
