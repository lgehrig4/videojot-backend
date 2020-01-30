const keys = require('./keys_dev');

if (process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: keys.productionURI}
} else {
  module.exports = {mongoURI: keys.localURI}
}
