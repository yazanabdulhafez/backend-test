'use strict';
/////////////////*initialize server*//////////////
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const indexController = require("./controllers/index.controller");
const apiDataController = require("./controllers/apiData.controller");
const { createFavController, getFavController, deleteFavController, updateFavController } = require("./controllers/CRUD.controller");
const favModel = require("./models/favDrink.model");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

/////////////////////////
const mongoUrl = 'mongodb+srv://Yazan:yazan12345@cluster1.x17fh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Database connected!"))
  .catch(err => console.log(err));
/////////////////////
const seedUserData = () => {
  const tea = new favModel({
    strDrink: "tea",
    strDrinkThumb: "sugar lot resd nom"
  });
  console.log(tea);
  tea.save();
};
seedUserData();
app.get('/', indexController)
app.get('/drinks', apiDataController);

/////////////////////////////////
app.get('/favDrink', getFavController);
app.post('/favDrink', createFavController);
app.delete('/favDrink/:id', deleteFavController);
app.put('/favDrink/:id', updateFavController);
////////////////////////
app.listen(PORT, () => console.log(`the server is running on port ${PORT}`));