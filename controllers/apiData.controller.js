'use strict';

const axios = require("axios");

let apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

const apiDataController = ((req, res) => {
  axios.get(apiUrl)
    .then(response => res.send(response.data.drinks))
    .catch((error) => console.log(error.message))
});

module.exports = apiDataController;