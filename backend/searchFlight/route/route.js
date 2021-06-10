const express = require('express');
const app = express();
 
const flightRoute = express.Router();
let Flight = require('../model/flight');
let SFlight=require('../model/flight');
 
// Get flight by details
flightRoute.route('/').get((req, res) => {
  Flight.find( (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})

flightRoute.route('/:id').get((req, res) => {
let flight_id=req.params.id;
  Flight.find({flight_id}, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})

flightRoute.route('/Sflight').get((req, res) => {
  let flight_id=req.params.id;
    Flight.find({flight_id}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
  })
module.exports = flightRoute;