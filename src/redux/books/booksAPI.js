import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aE0tLfmPZxaZ96qOJGFk/books';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
});

export const postBooks = createAsyncThunk('books/postBooks', async (book) => {
  await axios.post(`${API_URL}`, {
    item_id: book.id,
    title: book.title,
    category: book.category,
    author: book.author,
  });
  return book;
});

export const deleteBooks = createAsyncThunk('books/deleteBooks', async (itemId) => {
  await axios.delete(`${API_URL}/${itemId}`);
  return itemId;
});
