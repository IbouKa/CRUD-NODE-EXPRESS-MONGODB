const express=require('express')
const mongoose=require('mongoose')
const Product=require('./models/product.model.js')
const app=express()
app.use(express.json())
app.listen(3000,()=>{
    console.log('The server is running on 3000 port')
})

app.get('/',(req,res)=>{
    res.send('Hello Express JS')
})
//GET METHODS
app.get('/api/products',async (req,res)=>{
    try {
        const products= await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
app.get('/api/product/:id',async (req,res)=>{
    try {
        const {id} = req.params;
        console.log(id);
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json({message:"Product id does not valid"})
        }else{
            const product= await Product.findById(id)
            console.log(product);
            if (!product) {
                res.status(404).json({message:"Product id does not exist"})
            }else{
                console.log(product);
                res.status(200).json(product)
            }

        }
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
//POST METHODS
app.post('/api/products',async (req,res)=>{
    try {
        const product= await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
//PUT METHODS
app.put('/api/product/:id',async (req,res)=>{
    try {
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json({message:"Product id does not valid"})
        }else{
            var product= await Product.findByIdAndUpdate(id,req.body)
            if (!product) {
                res.status(404).json({message:"Product id does not exist"})
            }else{
                product= await Product.findById(id)
                res.status(200).json(product)
            }

        }
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

//DELETE METHODS
app.delete('/api/product/:id',async (req,res)=>{
    try {
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json({message:"Product id does not valid"})
        }else{
            var product= await Product.findByIdAndDelete(id,req.body)
            if (!product) {
                res.status(404).json({message:"Product id does not exist"})
            }else{
                res.status(200).json({message:"Delete is success"})
            }

        }
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

mongoose.connect('mongodb+srv://ibk2gallo:IXBwlp7rwW5D31Z2@cluster0.zahpeza.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('Connexion Ok')
})
.catch(()=>{
    console.log('Connexion Error')
})