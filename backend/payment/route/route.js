const express = require('express');
const app = express();
var Razorpay = require('razorpay');
const paymentRoute = express.Router();
let Book=require("../../bookFlight/models/bookings")
const fetch = require('node-fetch');
const Flight=require("../../searchFlight/model/flight")
let Pay = require('../model/model');
var instance =new Razorpay({
  key_id:"rzp_test_8C2GkCFmOdYo6q",
  key_secret:"O7mksDzhg16FbiOL7WSRSoqC"
})
const morgan = require("morgan");
const pdf = require("html-pdf");

const pdfTemplate = require("../documents/index1");


paymentRoute.post("/createpdf", (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

paymentRoute.get("/fetchpdf", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});




paymentRoute.route('/:id').get(async(req,res)=>{
  let flight_id=req.params.id;
    Book.find({flight_id}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
  
})
module.exports = paymentRoute;