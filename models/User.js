const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  userName: String,
  country: String,
  email: String,
  userImage: String,
  pass: String,
  rol: {type: String, default: 'nonadmin'},
})

const User = mongoose.model('user', userSchema)
module.exports = User 