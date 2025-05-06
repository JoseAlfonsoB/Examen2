import { useBookContext } from '../context/BookContext';

export default function ReadBooks() {
  const { books, toggleRead } = useBookContext();

  const readBooks = books.filter(b => b.read);

  return (
    <div className="mt-4">
      <h2 className="h4">Libros Leídos</h2>
      {readBooks.length === 0 ? <p>No hay libros leídos.</p> : (
        <ul className="list-group">
          {readBooks.map(book => (
            <li key={book.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{book.title}</strong> - {book.author} <br />
                <small className="text-muted">{book.genre} ({book.year})</small>
              </div>
              <button className="btn btn-warning btn-sm" onClick={() => toggleRead(book.id)}>Desmarcar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
