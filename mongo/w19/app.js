const express= require('express');
const mongoose=  require('mongoose');
const studRoues= require('./routes/studRoutes');    

const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.use('/', studRoues);

mongoose
  .connect("mongodb://localhost:27017/student")
  .then(() => console.log("database connected"));

app.listen(3000, ()=> console.log("port running on http://localhost:3000"));