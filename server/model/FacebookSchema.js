const mongoose = require('mongoose')
const FacebookSchema = mongoose.Schema({
    title:{
        type:String
    },
    postData:{
        type:String
    },
    image:{
        type:String,
    }
   
})
const FacebookModel = mongoose.model('FacebookModel',FacebookSchema)
module.exports = FacebookModel