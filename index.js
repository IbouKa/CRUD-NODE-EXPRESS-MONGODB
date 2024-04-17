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

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));