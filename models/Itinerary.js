const mongoose = require ("mongoose")

const itinerarySchema = new mongoose.Schema({
    tittle: {type: String, required: true},
    userImg: {type: String, required: true},
    userName: {type: String, required: true},
    likes: {type: Number, required: false, default : 0},
    hours: {type: Number, required: true},
    price: {type: Number, required: true},
    hashtags: {type: Array, required: true},
    activities: {type:[{actImg: {type:String, required: true}, actTittle: {type:String, required:true}}], required: true},
    comments: {type:[{userImg :String, userName: String, comment: String}], required: false, default: []},
    cityId: {type: mongoose.Schema.ObjectId, ref: "city"}
})
const Itinerary = mongoose.model("itinerary", itinerarySchema)
module.exports = Itinerary