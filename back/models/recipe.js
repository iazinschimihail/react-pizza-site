const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  rating: { type: Number, required: true },
  image: { type: String },
});

module.exports = mongoose.model('Recipe', recipeSchema);
