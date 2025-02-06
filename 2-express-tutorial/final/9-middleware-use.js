const express = require('express');
const app = express();
const {products} = require('./data.js')
const logger = require('./logger.js')
const authurize = require('./authorize.js')

// req => middleware => res


app.use([logger,authurize])

app.get('/' ,(req,res)=>{
    res.send('Home')
})

app.get('/about' ,(req,res)=>{
    res.send('About')
})


app.get('/api/products' ,(req,res)=>{
    res.send('Produnts')
})

app.get('/api/items' ,(req,res)=>{
    console.log(req.user);
    
    res.send('Items')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...');
})