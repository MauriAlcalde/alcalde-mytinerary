const express = require("express")
const router = express.Router()
const cityControler = require("../controllers/cityController")
const itineraryController= require("../controllers/itineraryController")
const userController = require ('../controllers/userController')
const validator = require('../controllers/validator')

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
module.exports = router