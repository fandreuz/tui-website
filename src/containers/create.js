const html = require('choo/html')
const header = require('components/header')
const builder = require('components/controls/builder/builder')
function createView(state, emit) {
  return html`
    <body>
         <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
      <div class="container" >
        ${header(state, emit)}
        ${builder(state, emit)}
      </div>
      <style>
        @font-face {
          font-family: 'lucida_consoleregular';
          src: url('/fonts/lucon-webfont.woff2') format('woff2'),
                url('/fonts/lucon-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;

        }

        @media only screen and (max-width: 500px) {
          .mobile-only {
            display:block;
          }
          .desktop-only {
            display:none;
          }
          .two-thirds.third { width:100%; }
          .half {
            width:100%;
          }
          .theme_settngs {
            text-align:center;
          }
          .setting {
          clear:none !important;
          float:none !important;
          }
        }

        html {
            overflow: scroll;
            overflow-x: hidden;
        }
        ::-webkit-scrollbar {
            width: 0px;  /* remove scrollbar space */
            background: transparent;  /* optional: just make scrollbar invisible */
        }
        /* optional: show position indicator in red */
        ::-webkit-scrollbar-thumb {
            border-bottom: 1px solid #14FF00;
            height:10px;
        }
      </style>
    </body>
  `
}

module.exports = createView