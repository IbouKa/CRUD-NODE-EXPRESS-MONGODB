const express=require('express')
const app=express()

app.listen(3000,()=>{
    console.log('The server is running in 3000 port')
})

app.get('/',(req,res)=>{
    res.send('Hello Express JS')
})