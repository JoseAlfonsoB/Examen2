import { createContext, useContext } from 'react';
import useBooks from '../hooks/useBooks';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const {
    allBooks,
    filteredBooks,
    addBook,
    deleteBook,
    toggleRead,
    updateBook,
    filterBooks,
    clearFilters
  } = useBooks();

  return (
    <BookContext.Provider
      value={{
        books: filteredBooks, // solo mostramos los filtrados
        addBook,
        deleteBook,
        toggleRead,
        updateBook,
        filterBooks,
        clearFilters
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
