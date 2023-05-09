const express = require('express')
const app =express();

require('dotenv').config();

const PORT = process.env.PORT || 3000

app.use(express.json());
//import routes 
const todoRoutes = require('./routes/todo')
app.use('/api/v1',todoRoutes)

// connection to the database
const dbConnect  =require('./config/database')
dbConnect();

// dafult routes
app.get('/',(res,req)=>{
    res.setEncoding("<h1>Hello</h1>")
})
app.listen(PORT, ()=>{
    console.log("Server Started")
})