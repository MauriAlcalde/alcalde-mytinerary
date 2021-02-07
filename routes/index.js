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
.get(itineraryController.allItineraries) //NO LO USO TODAVIA, NO SE SI LO USARE
.post(itineraryController.addItinerary)

router.route("/itineraries/:cityId")
.get(itineraryController.allById)
/* POSIBLEMENTE LOS USE MAS ADELANTE */
/* .put(itineraryController.upgradeItinerary)
.delete(itineraryController.deleteitinerary) */

router.route('/signup')
.post(validator.validateNewAccount, userController.signUp)

router.route('/login')
.post(userController.logIn)

router.route('/login/ls')
.post(passport.authenticate('jwt', {session: false}), userController.logFromLStorage)
module.exports = router