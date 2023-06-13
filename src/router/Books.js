import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import BookListComponent from '../components/BookListComponent';
import BookFormComponent from '../components/BookFormComponent';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <BookListComponent books={books} handleDelete={handleDelete} />
      <BookFormComponent />
    </div>
  );
};

export default Books;
