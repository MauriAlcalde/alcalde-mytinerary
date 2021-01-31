const express = require("express")
const router = express.Router()
const cityControler = require("../controllers/cityController")
const itineraryController= require("../controllers/itineraryController")

router.route("/cities")
.get(cityControler.allCities)
.post(cityControler.addCity)

router.route("/city/:id")
.get(cityControler.oneCity)

router.route("/itineraries")
.get(itineraryController.allItineraries)
.post(itineraryController.addItinerary)

router.route("/itineraries/:cityId")
.get(itineraryController.allById)
/* POSIBLEMENTE LOS USE MAS ADELANTE */
/* .put(itineraryController.upgradeItinerary)
.delete(itineraryController.deleteitinerary) */
module.exports = router