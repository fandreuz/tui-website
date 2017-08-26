const choo = require('choo')
const logger = require('utils/logger')
const app = choo()
const store = require('store/store')
const router = require('store/router')
const styles = require('style/main')

app.use(store)
app.use(logger)
router.map((data) => {
  app.route(data.url, data.view)
})

app.mount('body')
styles.render()