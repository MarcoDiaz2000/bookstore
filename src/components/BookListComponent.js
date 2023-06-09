import React from 'react';
import PropTypes from 'prop-types';
import BookComponent from './BookComponent';

const BookList = ({ books, handleDelete }) => (
  <div>
    {books.map((book) => <BookComponent key={book.id} book={book} handleDelete={handleDelete} />)}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default BookList;
