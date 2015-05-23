var V8Promise = require('../');
module.exports = {
  resolve: function resolve(value) {
    return V8Promise.resolve(value);
  },
  reject: function reject(value) {
    return V8Promise.reject(value);
  },
  deferred: function deferred() {
    return V8Promise.defer();
  }
};
