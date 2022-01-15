

const mongoose = require("mongoose")


const AlbumSchema = new mongoose.model({
  
    Name:{type:String,required:true},
    Genre:{type:String, required:true},
    Year:{type:String,required:true}

    
    

})


const Album = mongoose.model("album", AlbumSchema)


module.exports = Album