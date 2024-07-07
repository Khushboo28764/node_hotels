const express=require('express');
const router=express.Router();
const Person=require('./../models/person');

//POST route to add a person
router.post('/',async(req,res)=>{
    try{
        const data=req.body
    
        const newPerson= new Person(data)
        const response=await newPerson.save();
        console.log('data saved0');
        res.status(200).json(response);
    
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    
    }
    
    })
    
//Get method to get the person
router.get('/',async(req,res)=>{
    try{
        const data=await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }

    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

router.get('/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType;
        if(workType=='chef' || workType=='manager' || workType=='waiter'){
           const  response=await Person.find({work:workType});
           console.log('response fetched');
           res.status(200).json(response);

        }
        else{
            res.status(404).json({error:'Invalid work type'});
        }

    }
    catch(err){
           console.log(err);
           res.status(500).json({error:'Internal Server Error'})
    }
})
router.put('/:id',async(req,res)=>{
    try{
     const personId=req.params.id; // Extract the id from the URL parameter
     const updatePersonData=req.body; //Update data for the person
     const response=await Person.findByIdAndUpdate(personId,updatePersonData,{
        new:true, //Return the updated document
        runValidators:true, // Run  Mongoose validation
     })
     if(!response){
        return res.status(404).json({error: 'Person not found'});
     }
     console.log('data updated');
     res.status(200).json(response);
    }
        catch(err){
            console.log(err);
            res.status(500).json({error:'InternalServer Error'});

        }
    
})
router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id; //Extract the person's ID from the URL parameter
        // Assuming you have a Person model
        const response=await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:'Person not found'})
        }
        console.log('data delete');
        res.status(200).json({message:'person Delete Success'})

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})

    }
})
//comments added
//comments 2
module.exports=router;