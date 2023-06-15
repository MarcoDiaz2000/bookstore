import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/BookComponent.css';

const BookComponent = ({ book, handleDelete }) => {
  const bookState = useState(book)[0];

  const deleteBook = () => {
    handleDelete(bookState.id);
  };

  return (
    <div className="book row">
      <div className="col-6">
        <p className="book-category">{bookState.category}</p>
        <h2 className="book-title">{bookState.title}</h2>
        <p className="book-author">{bookState.author}</p>
        <div className="button-container">
          <div className="btn-group">
            <button type="button" className="btn btn-outline-primary btn-sm book-btn">Comments</button>
            <div className="vertical-line" />
            <button type="button" className="btn btn-outline-primary btn-sm book-btn" onClick={deleteBook}>Remove</button>
            <div className="vertical-line" />
            <button type="button" className="btn btn-outline-primary btn-sm book-btn">Edit</button>
          </div>
        </div>
      </div>
      <div className="col-3 progress-container progress-column text-center ">
        <div className="circular-progress" />
        <div>
          <p className="porcent"><strong>90%</strong></p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="col-3 chapter">
        <p className="current">CURRENT CHAPTER</p>
        <p className="introduction">Introduction</p>
        <button type="button" className="btn btn-primary update">UPDATE PROGRESS</button>
      </div>
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
