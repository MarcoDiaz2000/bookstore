import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBooks } from '../redux/books/booksAPI';
import '../styles/BookFormComponent.css';

const BookFormComponent = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postBooks({
      id: Date.now().toString(),
      title,
      author,
      category,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="new-book-form">
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" required />
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author name" required />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
      <button type="submit" className="btn btn-primary">Add Book</button>
    </form>
  );
};

export default BookFormComponent;
