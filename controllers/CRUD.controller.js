'use strict';

const favModel = require('../models/favDrink.model');


/////////////////////create////////////////////
const createFavController = ((req, res) => {
  const { strDrink, strDrinkThumb } = req.body;
  favModel.findOne({ strDrink: strDrink }, (error, data) => {
    if (error) {
      res.send(error.message);
    } else if (data) {
      res.send('data already exist')
    } else {
      const newFavDrink = new favModel({
        strDrink: strDrink,
        strDrinkThumb: strDrinkThumb
      })
      newFavDrink.save();
      res.send(newFavDrink);
    }
  })
});


///////////////// get ////////////////////
const getFavController = ((req, res) => {

  favModel.find({}, (error, data) => {
    if (error) {
      res.send(error.message);
    } else {
      res.send(data)
    }
  })
});

//////////////// delete ///////////////////
const deleteFavController = ((req, res) => {
  const id = req.params.id;
  favModel.deleteOne({ _id: id }, (error, data) => {
    if (error) {
      res.send(error.message);
    } else {
      res.send(data)
    }
  })
});


////////////////update ///////////////////////
const updateFavController = ((req, res) => {
  const id = req.params.id;
  const { strDrink, strDrinkThumb } = req.body;
  favModel.findOne({ _id: id }, (error, data) => {
    if (error) {
      res.send(error.message);
    } else {
      data.strDrink = strDrink;
      data.strDrinkThumb = strDrinkThumb;
      data.save();
      res.send(data);
    }
  })
});



module.exports = { createFavController, getFavController, deleteFavController, updateFavController };