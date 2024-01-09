const express = require('express')
const catController = require('../controllers/catController')
// const secondController = require('..tryAgain/differentfile')
const router = express.Router()

router
    .route('/')
    .get(catController.getAllCats)
// router
//     .route('/upload')
//     .get(catController.uploadPage)

// router 
//     .route('/edit/:id')
//     .get(catController.updateCat)

// router
//     .route('/delete/:id')
//     .post(catController.deleteCat)

module.exports = router