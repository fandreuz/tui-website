const mainView = require('containers/home')
const createView = require('containers/create')

const router = [
    { url: '/', view: mainView },
    { url: '/mainView', view: mainView },
    { url: '/create', view: createView }

]
module.exports = router