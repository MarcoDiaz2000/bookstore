import { createSlice } from '@reduxjs/toolkit';
import { getBooks, postBooks, deleteBooks } from './booksAPI';

export const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => Object.keys(action.payload).map((key) => ({
        id: key,
        title: action.payload[key][0].title,
        category: action.payload[key][0].category,
      })))
      .addCase(postBooks.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteBooks.fulfilled, (state, action) => (
        state.filter((book) => book.id !== action.payload)
      ));
  },
});

export default booksSlice.reducer;
