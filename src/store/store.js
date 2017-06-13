const { addTrainPart } = require('store/reducers')

function store(state, emitter) {
  emitter.on('addTrainPart', (data) => addTrainPart(data, state, emitter))
  state.train = []
}

module.exports = store