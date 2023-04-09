const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send("Hello Kaise ho app sabhi");
})

app.post('/api/cars',(req,res)=>{
    const{name,brand} = req.body;
    console.log(name)
    console.log(brand)
    res.send("Caar submitted succesfully")
})

app.listen(3000,()=>{
    console.log("Server is running on 3000")
})

const  mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase',{
    useNewUrlParser : true,
    useUnifiedTopology: true,
}).then(()=>{console.log("Connection Succesfully")})
.catch((error)=>{console.log("Recieved Error",error)})
