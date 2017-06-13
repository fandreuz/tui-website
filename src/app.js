const choo = require('choo')
const logger = require('utils/logger')
const app = choo()
const store = require('store/store')
const router = require('store/router')

app.use(store)
app.use(logger)
console.log(router)
router.map((data) => {
  app.route(data.url, data.view)
})

app.mount('body')