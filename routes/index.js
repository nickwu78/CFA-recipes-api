var express = require('express');
var router = express.Router();
var Ingredient = require('../models/Ingredient')
const ingredientController = require('../controllers/ingredientController')

/* GET home page. */
router.get('/', ingredientController.getIngredients);
router.post('/', ingredientController.addIngredients);
router.get('/ingredients/:id/edit', ingredientController.showEditIngredients);
router.post('/ingredients/:id/edit', ingredientController.updateIngredients);
router.post('/ingredients/:id', ingredientController.deleteIngredients);

module.exports = router;
