

const mongoose = require("mongoose")


const ArtistSchema = new mongoose.model({
    Name:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true}


})