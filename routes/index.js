const express = require("express")
const router = express.Router()
const cityControler = require("../controllers/cityController")

router.route("/cities")
.get(cityControler.allCities)
.post(cityControler.addCity)

router.route("/city/:id")
.get(cityControler.oneCity)
module.exports = router