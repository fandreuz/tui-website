var FileSaver = require('file-saver')

function saveToBlob(name, fileString) {
  const fileNameToSaveAs = name + '.xml'
  const blob = new Blob([fileString], { type: 'text/xml;charset=utf-8' })
  console.log('saving...')
  FileSaver.saveAs(blob, fileNameToSaveAs)
}

module.exports = saveToBlob