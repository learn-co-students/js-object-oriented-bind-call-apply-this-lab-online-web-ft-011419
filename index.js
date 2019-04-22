//Your code here
function justInvoke(callback) {
  return callback()
}

function setThisWithCall(callback, object, argument) {
  return callback.call(object, argument)
}

function setThisWithApply(callback, object, argument) {
  return callback.apply(object, argument)
}

function returnNewFunctionOf(callback, object) {
  return callback.bind(object)
}
