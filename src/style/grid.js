
function styles(sheet, sv) {
  sheet.add('.container', `
    max-width:1140px;
    display:block;
    margin: 5em auto;
  `)
  sheet.add('.half', `
    width: 49%;
    display: inline-block;
    margin-left: 1em;
    min-width:300px;

  `)
  sheet.add('.half:first-child', `
    margin-left:0;
    min-width:300px;
  `)
  sheet.add('.two-thirds.third', `
    width: 69%;
    display: inline-block;
    min-height: 200px;
    margin-left: 1em;
  `)
  sheet.add('.two-thirds.two', `
    width: 29%;
    display: inline-block;
    min-height: 200px;
  `)
  sheet.add('.theme_preview', `
          border:1px solid #282828;
          display:block;
          padding:1em;
          font-size:1.2em;
          text-align:left;
      `)
  sheet.add('.theme_preview span', `
          clear:both;
          display:block;
      `)
  sheet.add('.theme_preview .input_area', `
           display:block;
           clear:both;
           overflow:hidden;
    `)
  sheet.add('.theme_preview .input_area span.input_color', `
           display:inline;

    `)
  sheet.add('.theme_preview .input_area i', `
              font-style:normal;
              font-size:1.3em;
    `)
  sheet.add('.theme_preview .bottom-toolbar', `
           display:flex;
           clear:both;
           font-size:1.5em;
           padding-top:1em;
           padding-bottom:1em;
           text-align:center;
    `)
  sheet.add(`.theme_preview .bottom-toolbar i`, `
           flex:1;
           font-size:1em;
    `)
  sheet.add('.theme_preview input', `
          background:transparent;
          border:0px;
          width:75%;
      `)
  sheet.add(`.theme_preview .suggestions div`, `
           display:inline-block;
           padding:0.6em;
           margin:0.4em 0.2em;
    `)
}
module.exports = styles
