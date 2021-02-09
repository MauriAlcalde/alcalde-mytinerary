const express = require("express")
const router = express.Router()
const cityControler = require("../controllers/cityController")
const itineraryController= require("../controllers/itineraryController")
const userController = require ('../controllers/userController')
const validator = require('../controllers/validator')
const commentController = require('../controllers/commentsController')
const likeController = require('../controllers/likesController')
const passport = require('passport')
require('../config/passport')

router.route("/cities")
.get(cityControler.allCities)
.post(cityControler.addCity)

router.route("/city/:id")
.get(cityControler.oneCity)

router.route("/itineraries")
.post(itineraryController.addItinerary)

router.route("/itineraries/:cityId")
.get(itineraryController.allById)
/* POSIBLEMENTE LOS USE MAS ADELANTE */
/* .put(itineraryController.upgradeItinerary)
.delete(itineraryController.deleteitinerary) */

router.route('/signup')//REVISAR CONCEPTO DE JOI (VALIDATOR)
.post(validator.validateAccount, userController.signUp)

router.route('/signin')
.post(userController.signIn)

router.route('/signin/ls')//REVISAR CONCEPTO DE PASSPORT (CLASE)
.post(passport.authenticate('jwt', {session: false}), userController.signFromLStorage)

router.route('/comments')
.post(passport.authenticate('jwt', {session: false}),commentController.addComment)
.put(passport.authenticate('jwt', {session: false}),commentController.deleteComment)

router.route('/comments/update')
.put(passport.authenticate('jwt', {session: false}), commentController.updateComment)

router.route('/likes')
.post(passport.authenticate('jwt', {session: false}), likeController.like)

router.route('/dislike')
.post(passport.authenticate('jwt', {session: false}), likeController.dislike)
module.exports = router