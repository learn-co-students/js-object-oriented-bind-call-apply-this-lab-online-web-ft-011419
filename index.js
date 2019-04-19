function justInvoke(callback) {
  return callback()
}

function setThisWithCall(callback, object, argument) {
  return callback.call(object, argument)
}

function setThisWithApply(callback, object, arguments) {
  return callback.apply(object, [...arguments])
}

function returnNewFunctionOf(callback, object) {
  return callback.bind(object)
}
