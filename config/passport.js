const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')

//CUANDO REALIZO UN PEDIDO A UNA RUTA QUE ESTA PROTEGIDA
module.exports = passport.use(new jwtStrategy({
  // VA A EXTRAER EL TOKEN QUE VIENE EN LA CABECERA
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  // LO INTERPRETA USANDO LA CLAVE
  secretOrKey: process.env.SECRET_KEY
  //CUANDO YA LO TENGAS, INTERPRETALO EN EL PAYLOAD
}, (payload, done) => {
  // ENCONTRA EL USUARIO POR EL ID
  User.findById(payload._doc._id)
  .then(user => { 
  // SINO
    if(!user){
      // NO HAY ERROR, NO HAY USER
      return done(null, false)
    }else{
      //NO HAY ERROR, SI HAY USER
      return done(null, user)
    }
  })
  .catch(error => {
  // SI FALLA TENGO ERROR Y NO TENGO USER
    return done(error, false)
  })
}))
