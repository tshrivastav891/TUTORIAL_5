var mongoose = require('mongoose');
var movieSchema = mongoose.Schema({

    name:String,
    rating:Number
    
})
module.exports = mongoose.model("moviedatas",movieSchema)
