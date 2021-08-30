'use strict';

const mongoose = require("mongoose");

const favDrinkShema = mongoose.Schema({
  strDrink: { type: String, Unique: true, trim: true },
  strDrinkThumb: { type: String }
});

const favModel = mongoose.model('favoriteDrink', favDrinkShema);

module.exports = favModel;