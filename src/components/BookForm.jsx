import { useState } from 'react';
import { useBookContext } from '../context/BookContext';

export default function BookForm() {
  const { addBook } = useBookContext();
  const [form, setForm] = useState({ title: '', author: '', genre: '', year: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.author) {
      addBook(form);
      setForm({ title: '', author: '', genre: '', year: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 shadow-sm p-3 bg-light rounded">
      <div className="row g-2">
        {['title', 'author', 'genre', 'year'].map((field, idx) => (
          <div className="col-12 col-md-6" key={idx}>
            <input
              type="text"
              className="form-control"
              name={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            />
          </div>
        ))}
      </div>
      <div className="mt-3 text-end">
        <button className="btn btn-primary">Agregar Libro</button>
      </div>
    </form>
  );
}
