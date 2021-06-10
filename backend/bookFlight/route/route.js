const express=require('express');
const router=express.Router();
//const Flight=require("../models/flight");
const app = express();
const BookRoute = express.Router();
const Book= require('../models/bookings');
//const fetch = require('node-fetch');
//const flight=[];


/*fetch('http://localhost:8000/api')
    .then(res => res.json())
    .then(flight=> {
        console.log(flight);
})*/





BookRoute.route('/').post( async (req, res, next) => {
  
 
  const booking = new Book({ 
    flight_id:req.body.flight_id,
    name:req.body.name,
    Phoneno:req.body.Phoneno,
    amount:req.body.amount,
  }) 
  booking.save()
  .then(result=>{
    console.log(result);
    res.status(201).json({
      booking})
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({
      error:err
    })
  })
 })

 BookRoute.route('/:id').get((req, res) => {
  let flight_id=req.params.id;
    Book.find({flight_id}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
  })
  



  

 


  
module.exports = BookRoute;