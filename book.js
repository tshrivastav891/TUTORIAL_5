var mongoose = require('mongoose');
var bookSchema = mongoose.Schema({

    name:String,
    price:Number
    
})
module.exports = mongoose.model("book",bookSchema)
