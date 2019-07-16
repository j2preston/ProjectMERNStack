const express = require("express");
const routerCar = express.Router();
const keys = require("../../config/keys");
const Car = require("../../models/Car")

// @route POST api/cars/addcar
// @desc Add Car
// @Access public - may need to change to emp only...
routerCar.post("/addcar", (req, res) => {
    const newCar = new Car({
        type: req.body.type,
        model: req.body.model,
        noDoors: req.body.noDoors,
        price: req.body.price,
        isBooked: req.body.isBooked,
    })
    //save the car to the database
    newCar
        .save()
        .then(car => res.json(car))
})


// @route GET api/cars/carlist
// @description returns list of all cars in DB
// Access public - may need to change to emp only...
routerCar.get('/carlist', (req, res) => {
    Car.find(function(err, cars){
      if (err){
        res.send(err)
      }
      res.json(cars)
    })
})


// @route get api/cars/:carid
routerCar.get('/:car_id', (req, res) => {
    Car.findById(req.params.car_id, function(err, car){
      if(err){
        res.send(err)
      }
      res.json(car)
    })
})


// @route update api/cars/:car_id
// @desc allows the user to update a specific car
routerCar.put('/:car_id', (req, res, next) => {
  Car.findByIdAndUpdate({_id: req.params.car_id}, req.body).then(()=>{
    Car.findOne({_id: req.params.car_id}).then((car)=>{
      res.send(car)
    })
  })
})


module.exports = routerCar;