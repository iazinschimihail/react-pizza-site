import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './slices/recipeSlice';
import uiReducer from './slices/uiSlice';

const store = configureStore({
  reducer: { 
    recipes: recipeReducer ,
    ui: uiReducer,
  },
});

export default store;
