require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/connectDB')
const catRoutes = require('./routes/catRoutes')
const PORT = process.env.PORT || 3500

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

app.set('view engine','ejs')

app.use('/', catRoutes)
app.use('/upload', catRoutes)

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})