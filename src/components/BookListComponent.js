import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import BookComponent from './BookComponent';
import '../styles/BookListComponent.css';

const BookList = ({ handleDelete }) => {
  const books = useSelector((state) => state.books);

  return (
    <div className="book-list">
      {books.map((book) => <BookComponent key={book.id} book={book} handleDelete={handleDelete} />)}
    </div>
  );
};

BookList.propTypes = {
  handleDelete: PropTypes.func.isRequired,
};

export default BookList;
