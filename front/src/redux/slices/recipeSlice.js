import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const mockRecipes = [
  { id: 1, title: 'Supă', author: 'Misha', rating: 5 },
  { id: 2, title: 'Pâine cu pateu', author: 'LSAC', rating: 4.5 },
  { id: 3, title: 'Cartofi prăjiți', author: 'Edi', rating: 4.8 },
];

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('/api/recipes');
    return mockRecipes;
  } catch (error) {
    console.error('API ERROR:', error.message);
    return mockRecipes; 
  }
});

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: { recipes: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        console.log('Loading...');
        state.loading = true;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        console.log('Fulfilled', action.payload);
        state.recipes = action.payload;
        state.loading = false;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        console.log('Rejected', action.payload);
        state.recipes = action.payload || [];
        state.loading = false;
      });
  },
  
});

export default recipeSlice.reducer;
