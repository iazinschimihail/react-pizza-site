const express = require('express');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');
const app = express();

connectDB();

app.use(express.json());
app.use('/api/recipes', recipeRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
