const Itinerary = require("../models/Itinerary")

const itineraryController ={
    addItinerary: (req,res) => {
        const itineraryAGrabar = new Itinerary({
            tittle: req.body.tittle,
            userImg: req.body.userImg,
            userName: req.body.userName,
            likes: req.body.likes,
            hours: req.body.hours, 
            price: req.body.price,
            hashtags: req.body.hashtags,
            activities: req.body.activities,
            comments: req.body.comments,
            cityId: req.body.cityId
        })

        itineraryAGrabar.save()
        .then(async itineraryGrabado => {
           const itinerary = await Itinerary.findOne({_id: itineraryGrabado._id}).populate("cityId")//NO USO LA POPULACION
           return res.json({succes: true, response: itinerary})
        })
        .catch(error => {
            return res.json({success: false, error: error})
        })
    },

    allById: async (req,res)=>{
        const id = req.params.cityId
        const registro = await Itinerary.find({cityId:id}).populate("cityId")
        res.json({succes:true, response:registro})

    }
}
module.exports = itineraryController