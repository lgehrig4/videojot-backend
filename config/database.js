if (process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: 'mongodb+srv://lgehrig4:ReneeDBcode1!@cluster0-5yfak.mongodb.net/test?retryWrites=true'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}
