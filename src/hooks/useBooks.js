import { useState, useEffect } from 'react';

const useBooks = () => {
  const [allBooks, setAllBooks] = useState(() => {
    const saved = localStorage.getItem('books');
    return saved ? JSON.parse(saved) : [];
  });

  const [filteredBooks, setFilteredBooks] = useState(allBooks);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(allBooks));
    setFilteredBooks(allBooks); // Sincronizar cuando se cambia la lista completa
  }, [allBooks]);

  const addBook = (book) =>
    setAllBooks(prev => [...prev, { ...book, id: crypto.randomUUID(), read: false }]);

  const deleteBook = (id) =>
    setAllBooks(prev => prev.filter(b => b.id !== id));

  const toggleRead = (id) =>
    setAllBooks(prev => prev.map(b => b.id === id ? { ...b, read: !b.read } : b));

  const updateBook = (updatedBook) =>
    setAllBooks(prev => prev.map(b => b.id === updatedBook.id ? updatedBook : b));

  const filterBooks = (filters) => {
    const filtered = allBooks.filter(book =>
      book.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
      book.genre.toLowerCase().includes(filters.genre.toLowerCase())
    );

    if (filtered.length === 0) {
      alert('No se encontró ningún libro con esos filtros');
    }

    setFilteredBooks(filtered);
  };

  const clearFilters = () => {
    setFilteredBooks(allBooks);
  };

  return {
    allBooks,
    filteredBooks,
    addBook,
    deleteBook,
    toggleRead,
    updateBook,
    filterBooks,
    clearFilters
  };
};

export default useBooks;
