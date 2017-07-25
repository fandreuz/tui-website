function HEX2RGBA(hex, alpha) {
  let bigint = parseInt(hex, 16)
  let r = (bigint >> 16) & 255
  let g = (bigint >> 8) & 255
  let b = bigint & 255

  if (alpha) {
    return `rgba(${r},${g},${b},${alpha})`
  } else {
    return `rgb(${r},${g},${b})`
  }
}
function RGBA2HEX(rgb) {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)
  console.log('RGBA2HEX', rgb)
  return (rgb && rgb.length === 4) ? '#' +
  ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
  ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
  ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : ''
}

function convertAlpha(opacity) {
  // Add flip array option here to switch between hex and rgba
  const matrix = {
    'FF': '1',
    'F2': '0.95',
    'E6': '0.90',
    'D9': '0.85',
    'CC': '0.80',
    'BF': '0.75',
    'B3': '0.70',
    'A6': '0.65',
    '99': '0.60',
    '8C': '0.55',
    '80': '0.50',
    '73': '0.45',
    '66': '0.40',
    '59': '0.35',
    '4D': '0.30',
    '40': '0.25',
    '33': '0.20',
    '26': '0.15',
    '1A': '0.10',
    '0D': '0.5',
    '00': '0'
  }
  let result = matrix[`${opacity.toUpperCase()}`]
  if (typeof result === 'undefined') {
    console.log(opacity, 'undefined')
    result = '0'
  }
  return result
}

module.exports = {
  HEX2RGBA,
  RGBA2HEX,
  convertAlpha
}