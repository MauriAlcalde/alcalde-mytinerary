const mongoose= require('mongoose')

mongoose.connect("mongodb+srv://mauricioalcalde:mauricioalcaldemongodb@cluster0.2zxgj.mongodb.net/mytinerary?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify: false
})
.then(()=> console.log("Database connected"))
.catch(error => console.log(error))