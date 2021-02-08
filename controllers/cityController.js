const City = require("../models/City")

const cityControler = {
    addCity: (req,res) => {
        const cityAGrabar = new City({//NUEVA INSTANCIA DE CITY
            src: req.body.src,
            name: req.body.name
        })
        cityAGrabar.save()
        .then(cityGrabada => {
            return res.json({success: true, response: cityGrabada})
        })
        .catch(error => {
            return res.json({success: false, error: error})
        })
    },
    /* DEVUELVO TODAS LAS CIUDADES EN UN ARRAY */
    allCities: async (req,res)=>{

        const data= await City.find()//FIND DEVUELVE ARRAY, FINDBYID Y FINDONE DEVUELVEN OBJETOS
        
        res.json({
            response: data
        })
    },
    oneCity: async (req, res)=>{
        console.log(req.params)
        const id = req.params.id
        const registro = await City.findOne({_id:id})//DEVUELVO OBJETO POR SU ID
        res.json({succes:true, response:registro})
    }
}
module.exports = cityControler