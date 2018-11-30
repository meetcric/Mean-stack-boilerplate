const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const config=require('./config/database');



const app=express()

const api=require('./routes/api');

//Port Number
const port=3000;

//CORS middleware
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname,'public')));

//Body Parser middleware
app.use(bodyParser.json());

app.use('/api',api);

//Index route
app.get('/',(req,res)=>{
  res.send('Invalid endpoint');
})
//Start server
app.listen(port,()=>{
  console.log('server started on port '+port);
})
