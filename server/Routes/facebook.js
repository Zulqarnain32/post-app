const express = require('express')
const router = express.Router();
const FacebookModel = require('../model/FacebookSchema')

//second step is to read created data
router.get('/facebook', async(req,res) => {
    FacebookModel.find({})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})




module.exports = router;