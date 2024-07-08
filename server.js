const express=require('express')
const app=express();
const db=require('./db');
require('dotenv').config();
const bodyParser=require('body-parser');
app.use(bodyParser.json())
const PORT=process.env.PORT || 3000;
const Person=require('./models/person');
const MenuItem=require('./models/MenuItem')
app.get('/' ,function (req,res){
    res.send('Welcome to my hotel....How i can help you? ,we have list of menus')

})
// Import the router files
const personRoutes= require('./routes/personRoutes');
app.use('/person',personRoutes)

app.listen(PORT ,()=>{
    console.log('listening on port 3000')
})