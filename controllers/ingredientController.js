const mongoose = require('mongoose');
const Ingredient = require('../models/Ingredient');

exports.getIngredients = (req, res) => {
  Ingredient.find()
    .then(ingredients => {
      res.render('index', {
        title: 'Ingredients',
        ingredients: ingredients
      })
    })
};

exports.addIngredients = (req, res) => {
  const name = req.body.ingredient_name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
    .then(() => {
      res.redirect('/')
    })
};

exports.showEditIngredients = (req, res) => {
  Ingredient.findOne({ _id: req.params.id })
    .then(ingredient => {
      res.render('editIngredient', {ingredient: ingredient});
    })
};

exports.updateIngredients = (req, res) => {
  Ingredient.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  })
    .then(ingredient => {
      res.redirect('/')
  })
};

// exports.deleteIngredients = (req, res) => {
//   Ingredient.remove({ _id: req.params.id })
//     .then(ingredient => {
//       res.redirect('/')
//   })
// };

exports.deleteIngredients = (req, res) => {
  Ingredient.findOne({ _id: req.params.id })
    .then(ingredient => {
      ingredient.remove()
        .then(() => {
          res.redirect('/')
    })
  })
};