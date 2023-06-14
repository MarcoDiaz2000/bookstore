import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookComponent = ({ book, handleDelete }) => {
  const bookState = useState(book)[0];

  const deleteBook = () => {
    handleDelete(bookState.id);
  };

  return (
    <div>
      <p>{bookState.category}</p>
      <h2>{bookState.title}</h2>
      <p>{bookState.author}</p>
      <button type="button" onClick={deleteBook}>Delete</button>
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
