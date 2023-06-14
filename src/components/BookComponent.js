import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/BookComponent.css';

const BookComponent = ({ book, handleDelete }) => {
  const bookState = useState(book)[0];

  const deleteBook = () => {
    handleDelete(bookState.id);
  };

  return (
    <div className="book">
      <p className="book-category">{bookState.category}</p>
      <h2 className="book-title">{bookState.title}</h2>
      <p className="book-author">{bookState.author}</p>
      <button type="button" className="btn btn-primary" onClick={deleteBook}>Delete</button>
    </div>
  );
};

BookComponent.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default BookComponent;
