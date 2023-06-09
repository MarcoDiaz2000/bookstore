import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookFormComponent = ({ handleAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd({ title, author });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" required />
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author name" required />
      <button type="submit">Add Book</button>
    </form>
  );
};

BookFormComponent.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

export default BookFormComponent;
