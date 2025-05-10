const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/MenuItem');

//POST route to add an Item
router.post('/', async (req, res) =>{
     try{
        const data = req.body
        const newItem = new MenuItem(data);
        const response = await newItem.save();
        console.log('data saved');
        res.status(200).json(response);
     }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
     }
})

//GET method menu
router.get('/', async (req, res) =>{
  try{
     const data = await MenuItem.find()
     console.log('data fetched');
     res.status(200).json(data);
  }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
  }
})

// Paramterised call person ka
router.get('/:tasteType', async (req, res)=>{
   try{
     const tasteType = req.params.tasteType; //Extract the work type from the url parameter
     if(tasteType == 'sour' || tasteType == 'spicy' || tasteType == 'sweet'){
            
          const response = await MenuItem.find({taste: tasteType});
          console.log('response fetched');
          res.status(200).json(response);
     }else{
          res.status(404).json({error: 'Invalid taste type'});
      }
   }catch(err){
       console.log(err);
       res.status(500).json({error: 'Internal Server Error'});
   }
})

module.exports = router;