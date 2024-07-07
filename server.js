const express=require('express')
const app=express();
const db=require('./db');
const bodyParser=require('body-parser');
app.use(bodyParser.json())
const Person=require('./models/person');
const MenuItem=require('./models/MenuItem')
app.get('/' ,function (req,res){
    res.send('Welcome to my hotel....How i can help you? ,we have list of menus')

})
// Import the router files
const personRoutes= require('./routes/personRoutes');
app.use('/person',personRoutes)
app.listen(3000 ,()=>{
    console.log('listening on port 3000')
})