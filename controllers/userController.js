const User = require('../models/User')
const bcryptjs = require ('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
  signUp: async (req, res) => {
    var errors = [] //ACA VOY A GUARDAR EL MENSAJE EN CASO DE QUE EXISTA EL USUARIO AL MOMENTO DE REGISTRARSE
    const {name, lastname, userName, country, email, userImage, password, rol} = req.body
    const userExists = await User.findOne({email: email})
    if(userExists){
      var error = {context: {label: 'email'}, message: 'This email is already in use'}
      errors.push(error)
    }// VERIFICO SI EL USER EXISTE, SI PUSHEO EL MENSAJE AL ARRAY SINO LINEA DE ABAJO
    if(errors.length === 0){
      const passwordHashed = bcryptjs.hashSync(password, 10) //SI EL ARRAY ESTA VACIO ES POR QUE NO ENCONTRO USUARIO, ENTONCES HASHEO LA PASS Y USO SYNC POR QUE SINO DEVUELVE UNA PROMESA
      
      var newUser = new User({
        name, lastname, userName, email, userImage, password: passwordHashed, rol, country
      })
      var newUserSaved = await newUser.save()
      var token = jwt.sign({...newUserSaved}, process.env.SECRET_KEY,{})
    }
    return res.json({success: errors.length === 0 ? true : false,
                    errors: errors,
                    response: errors.length === 0 && {token, name: newUserSaved.name, pic: newUserSaved.userImage, userName: newUserSaved.userName, id: newUserSaved._id}})
  },
  
  signIn: async (req, res) => {
    const {email, password} = req.body
    const userExists = await User.findOne({email: email})
    if(!userExists){
      return res.json({success:false, response: 'Email or password are not correct'})
    }
    const passwordMatches = bcryptjs.compareSync(password, userExists.password) //HAGO LA COMPARACION DE LAS PASS HASHEADAS Y USO SYNC PORQUE SINO DEVUELVE UNA PROMESA
    if(!passwordMatches){
      return res.json({success: false, response: 'Email or password are not correct'}) // SI EN LA COMPARACION NO COINCIDEN DEVUELVO FALSE SINO LINEA SIGUIENTE
    }
    var token = jwt.sign({...userExists}, process.env.SECRET_KEY, {})
    return res.json({success:true, response: {token, name: userExists.name, pic: userExists.userImage, userName: userExists.userName, id: userExists._id}})
  },

  signFromLStorage: async (req, res) => {
    res.json({succes: true, response: {token: req.body.token, name: req.user.name, pic: req.user.userImage, userName: req.user.userName, id: req.user._id}})//REVISAR CLASE DE LOCALSTORAGE PARA ENTENDER BIEN LO QUE HAGO
  }
} 

module.exports = userController