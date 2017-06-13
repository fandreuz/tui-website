function addTrainPart(image, state, emitter) {
  state.train.push(image)
  emitter.emit('render')
}

const reducers = {
  addTrainPart
}

module.exports = reducers
