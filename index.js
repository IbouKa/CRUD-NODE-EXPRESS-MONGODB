const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express()
//Middelware
app.use(express.json())
//Route
app.use('/api/products', productRoute)

app.listen(3000, () => {
    console.log('The server is running on 3000 port')
})

app.get('/', (req, res) => {
    res.send('Hello Express JS')
})

mongoose.connect('mongodb+srv://ibk2gallo:IXBwlp7rwW5D31Z2@cluster0.zahpeza.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connexion Ok')
    })
    .catch(() => {
        console.log('Connexion Error')
    })