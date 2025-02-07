const express = require('express')
const mongoose = require('mongoose')
const app = express()

const productRouter = require('./routes/product.route.js')


// parse json
app.use(express.json())

app.use('/api/products',productRouter)



mongoose.connect("mongodb+srv://primecodellc:648PkbApr9I3GZ4R@backenddb.ct0pq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDb")
.then(()=>{
    console.log('Connected to database');
    app.listen(5000,()=>{
        console.log('server is running on port 5000');
    })
}).catch(()=>{
    console.log('Connection failed!');
})