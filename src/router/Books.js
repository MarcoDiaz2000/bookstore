import React, { useState } from 'react';
import BookListComponent from '../components/BookListComponent';
import BookFormComponent from '../components/BookFormComponent';

const Books = () => {
  const [books, setBooks] = useState([
    {
      id: 1, title: 'Book 1', author: 'Author 1', category: 'Category 1',
    },
  ]);

  const handleAdd = (book) => {
    const newId = books.reduce((maxId, book) => Math.max(maxId, book.id), 0) + 1;
    setBooks([...books, { ...book, id: newId }]);
  };

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <BookListComponent books={books} handleDelete={handleDelete} />
      <BookFormComponent handleAdd={handleAdd} />
    </div>
  );
};

export default Books;
