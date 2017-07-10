function localStorageToFile(locale) {
  const csv = JSON.stringify(localStorage[locale])
  const csvAsBlob = new Blob([csv], { type: 'text/plain' })
  const fileNameToSaveAs = 'local-storage.txt'
  const downloadLink = document.getElementById('save')
  downloadLink.download = fileNameToSaveAs
  if (window.URL !== null) {
    // Chrome allows the link to be clicked without actually adding it to the DOM
    downloadLink.href = window.URL.createObjectURL(csvAsBlob)
    downloadLink.target = `_blank`
  } else {
    downloadLink.href = window.URL.createObjectURL(csvAsBlob)
    downloadLink.target = `_blank`
    downloadLink.style.display = 'none'
    // add .download so works in Firefox desktop.
    document.body.appendChild(downloadLink.download)
  }
  downloadLink.click()
}

module.exports = localStorageToFile