const express = require('express')
const path = require('path')
const app = express() 


// setup static and middleware
app.use(express.static('./public'))


// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//      adding to static assets
//      SSR
// })

app.all('*',(rea,res)=>{
    res.status(404).send('resource not found')
})


app.listen(5000,()=>{
    console.log('server is listening on port 5000...');
})


// https://youtube.com/shorts/cJl7-OfJtL8?si=QF8ke_zwFyGjMS8y