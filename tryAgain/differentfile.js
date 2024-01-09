const Cat = required('../models/catModel')

const getSomeCats = async (req, res) => {
    try {
        const cats = await Cat.find()
        res.render('home', {cats: cats})
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    getSomeCats,
}