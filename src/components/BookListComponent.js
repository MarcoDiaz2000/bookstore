import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import BookComponent from './BookComponent';

const BookList = ({ handleDelete }) => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => <BookComponent key={book.id} book={book} handleDelete={handleDelete} />)}
    </div>
  );
};

BookList.propTypes = {
  handleDelete: PropTypes.func.isRequired,
};

export default BookList;
