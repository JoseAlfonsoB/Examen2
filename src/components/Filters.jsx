import { useState } from 'react';
import { useBookContext } from '../context/BookContext';

export default function Filters() {
  const { books, setBooks } = useBookContext();
  const [filters, setFilters] = useState({ title: '', author: '', genre: '' });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
      book.genre.toLowerCase().includes(filters.genre.toLowerCase())
    );

    if (filtered.length === 0) {
      alert('No se encontró ningún libro con esos filtros');
    } else {
      setBooks(prev => [...prev]); // No borra libros
    }
  };

  const clearFilters = () => {
    setFilters({ title: '', author: '', genre: '' });
  };

  return (
    <div className="shadow-sm p-3 mb-4 bg-light rounded">
      <div className="row g-2">
        {['title', 'author', 'genre'].map((field, idx) => (
          <div className="col-12 col-md-4" key={idx}>
            <input
              className="form-control"
              placeholder={`Filtrar por ${field}`}
              name={field}
              value={filters[field]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
      <div className="mt-3 d-flex justify-content-end">
        <button className="btn btn-dark me-2" onClick={applyFilters}>Aplicar filtros</button>
        <button className="btn btn-secondary" onClick={clearFilters}>Limpiar filtros</button>
      </div>
    </div>
  );
}
