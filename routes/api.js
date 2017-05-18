var express = require('express');
var router = express.Router();
const Ingredient = require('../models/Ingredient');

/* GET users listing. */
router.get('/', (req, res) => {
  Ingredient.find()
    .then(ingredients => {
      res.json(ingredients)
    })
});

module.exports = router;