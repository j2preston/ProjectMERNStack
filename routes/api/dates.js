const express = require("express");
const routerDate = express.Router();
const keys = require("../../config/keys");
const Datex = require("../../models/Datex") /**DATEX AS DATE IS ALREADY A CLASS IN JS*/


// @route GET api/dates/dateslist
// @description returns list of all cars in DB
// Access public - may need to change to emp only...
routerDate.get('/dateslist', (req, res) => {
  Datex.find(function (err, dates) {
    if (err) {
      res.send(err)
    }
    res.json(dates)
  })
})




//NEED TO GET SIZE OF DATES COLLECTION
/* routerDate.get('/dateslistsize', (req, res) => {
    const number = 5
    res.json({number})
}) */




// @route update api/dates/:date_id
// @desc allows the user to update a specific car
routerDate.put('/:date_id', (req, res, next) => {
  Datex.findByIdAndUpdate({ _id: req.params.date_id }, req.body).then(() => {
    Datex.findOne({ _id: req.params.date_id }).then((date) => {
      res.send(date)
    })
  })
})

// @route update api/dates/:count_id
// @desc allows the user to update a car based on its count - required for update all date car lists
routerDate.put('/datelist/:count', (req, res, next) => {
  Datex.findOneAndUpdate({count: req.params.count}, req.body).then(() => {
    Datex.findOne({ count: req.params.count}).then((date) => {
      res.send(date)
    })
  })
})


// @route get api/dates/:count_id
// @desc allows us to access a car list based on its id
routerDate.get('/datelist/:count', (req, res) => {
  Datex.find({count: req.params.count}, function (err, date) {
    if (err) {
      res.send(err)
    }
    res.json(date)
  })
})



// @route get api/dates/:dates_id
routerDate.get('/:date_id', (req, res) => {
  Datex.findById(req.params.date_id, function (err, date) {
    if (err) {
      res.send(err)
    }
    res.json(date)
  })
})

module.exports = routerDate;