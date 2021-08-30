'use strict';
/////////////////*initialize server*//////////////
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const indexController = require("./controllers/index.controller");
const apiDataController = require("./controllers/apiData.controller");
const { createFavController, getFavController, deleteFavController, updateFavController } = require("./controllers/CRUD.controller");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

/////////////////////////

mongoose.connect("mongodb://localhost:27017/favDrink", { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to the DB'));

/////////////////////

app.get('/', indexController)
app.get('/drinks', apiDataController);

/////////////////////////////////
app.get('/favDrink', getFavController);
app.post('/favDrink', createFavController);
app.delete('/favDrink/:id', deleteFavController);
app.put('/favDrink/:id', updateFavController);
////////////////////////
app.listen(PORT, () => console.log(`the server is running on port ${PORT}`));