const mongoose = require('mongoose')
const FacebookSchema = mongoose.Schema({
    title:{
        type:"String"
    },
    image:{
        type:"String",
    },
    post:{
        type:"String"
    } 
})
const FacebookModel = mongoose.model('FacebookModel',FacebookSchema)
module.exports = FacebookModel