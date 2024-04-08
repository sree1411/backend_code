 



 const express = require('express')
 const mongoose = require('mongoose')
 const dotEnv = require('dotenv')
 const bodyParser =require('body-parser')
 const vendorRoutes = require('./routes/vendorRoutes')
 const firmRoutes= require('./routes/firmRoutes')
 const productRoutes = require('./routes/productRoute')

 dotEnv.config()
 mongoose.connect(process.env.MONGOOSE_URI).then(()=>{
    console.log('mongodb connection success.....')
 })




 const app = express()
 const port = process.env.PORT ||3001


app.use(bodyParser.json())

app.use('/vendor', vendorRoutes)
app.use('/firm', firmRoutes)
app.use('/product', productRoutes)



 app.listen(port, ()=>{
    console.log(`app is runnning on ${port}`)
 })

 app.use("/home", (req,res)=>{
   res.status(201).json({success: "welcome to the page "})
 })