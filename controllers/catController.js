const Cat = require('../models/catModel')
const multer = require('multer')

// multer configuration for image upload
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './views/public/images');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({storage: storage})

const getAllCats = async (req, res) => {
    try {
        const cats = await Cat.find() // experimentation needed
        res.render('home', {cats: cats}) // change the variable name and the key's value to the same name to decipher the difference in naming
    } catch(err) {
        console.log(err)
    }
}

const uploadPage = (req, res) => {
    res.render('upload')
}

const createCat = async (req, res) => {
    try {
      const cat = new Cat({
        name: req.body.name,
        age: req.body.age,
        favoriteFood: req.body.favoriteFood,
        funFact: req.body.funFact,
        image: req.file.filename //multer places the file info in req.file
    })

    await cat.save()
    res.redirect('/')

    } catch(err) {
      console.log(err)
    }
}

const editPage = async (req, res) => {
    try {
        const cat = await Cat.findById(req.params.id)
        res.render('edit', {cat: cat}) // change ejs variables
    } catch (err){
        console.log(err)
    }
}

const updateCat = async (req, res) => {
    try {
        await Cat.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/')
    } catch (err){
        console.log(err)
    }
}

const deleteCat = async (req, res)=> {
    try {
        await Cat.findByIdAndRemove(req.params.id)
        res.redirect('/')
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getAllCats,
    upload,
    uploadPage,
    createCat,
    editPage,
    updateCat,
    deleteCat
}