import { useState } from 'react';
import { useBookContext } from '../context/BookContext';

export default function BookList() {
  const { books, deleteBook, toggleRead, updateBook } = useBookContext();
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ title: '', author: '', genre: '', year: '' });

  const startEditing = (book) => {
    setEditId(book.id);
    setEditData(book);
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveEdit = () => {
    updateBook(editData);
    setEditId(null);
  };

  const cancelEdit = () => {
    setEditId(null);
  };

  return (
    <div className="mt-4">
      <h2>Libros</h2>
      <ul className="list-unstyled">
        {books.map(book => (
          <li key={book.id} className="mb-3 border p-2 rounded">
            {editId === book.id ? (
              <>
                <input className="form-control mb-1" name="title" value={editData.title} onChange={handleEditChange} />
                <input className="form-control mb-1" name="author" value={editData.author} onChange={handleEditChange} />
                <input className="form-control mb-1" name="genre" value={editData.genre} onChange={handleEditChange} />
                <input className="form-control mb-2" name="year" value={editData.year} onChange={handleEditChange} />
                <button className="btn btn-success btn-sm me-2" onClick={saveEdit}>Guardar</button>
                <button className="btn btn-secondary btn-sm" onClick={cancelEdit}>Cancelar</button>
              </>
            ) : (
              <>
                <strong>{book.title} - {book.author} ({book.year})</strong>
                <div><em>{book.genre}</em></div>
                <button className="btn btn-outline-primary btn-sm me-2" onClick={() => toggleRead(book.id)}>
                  {book.read ? 'No leído' : 'Marcar leído'}
                </button>
                <button className="btn btn-outline-danger btn-sm me-2" onClick={() => deleteBook(book.id)}>Eliminar</button>
                <button className="btn btn-outline-warning btn-sm" onClick={() => startEditing(book)}>Editar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
