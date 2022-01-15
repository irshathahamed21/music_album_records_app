

const mongoose = require("mongoose")


const SongSchema = new mongoose.model({
   
    Name:{type:String,required:true},
    Duration:{type:String, required:true}

    

})

const Songs = mongoose.model("song", SongSchema)

module.exports = Songs