import { configureStore } from '@reduxjs/toolkit';
import booksSliceReducer from './books/booksSlice';
import categoriesSliceReducer from './categories/categoriesSlice';

export default configureStore({
  reducer: {
    books: booksSliceReducer,
    categories: categoriesSliceReducer,
  },
});
