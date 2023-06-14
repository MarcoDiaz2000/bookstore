import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks, deleteBooks } from '../redux/books/booksAPI';
import BookListComponent from '../components/BookListComponent';
import BookFormComponent from '../components/BookFormComponent';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBooks(id));
  };

  return (
    <div>
      <BookListComponent books={books} handleDelete={handleDelete} />
      <BookFormComponent />
    </div>
  );
};

export default Books;
