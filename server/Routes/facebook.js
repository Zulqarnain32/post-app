const express = require('express')
const router = express.Router();
const multer = require('multer');
const path = require('path');

const FacebookModel = require('../model/FacebookSchema')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Set the directory where uploaded files will be stored
    },
    filename: (req, file, cb) => {
        const extname = path.extname(file.originalname);
        cb(null, Date.now() + extname); // Rename the file with a timestamp to avoid name conflicts
    }
});
const upload = multer({ storage });



//second step is to read created data
router.get('/facebook', async(req,res) => {
    FacebookModel.find({})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// first step to create data
router.post('/facebookPost', async (req,res) => { 
    const {title,postData,image} = req.body; 
    if(!title ||!postData || !image ){
        return res.json({message:"fill form"})
    } 
    FacebookModel.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router;