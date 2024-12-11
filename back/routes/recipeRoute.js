const express = require('express');
const Recipe = require('../models/recipe');
const router = express.Router();

router.get('/', async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

router.post('/', async (req, res) => {
  const { title, author, rating, image } = req.body;
  const recipe = new Recipe({ title, author, rating, image });
  await recipe.save();
  res.status(201).json(recipe);
});

module.exports = router;
