import { useBookContext } from '../context/BookContext';

export default function BookList() {
  const { books, deleteBook, toggleRead, updateBook } = useBookContext();

  const handleEdit = (book) => {
    const newTitle = prompt('Nuevo título:', book.title);
    const newAuthor = prompt('Nuevo autor:', book.author);
    const newGenre = prompt('Nuevo género:', book.genre);
    const newYear = prompt('Nuevo año:', book.year);

    if (newTitle && newAuthor && newGenre && newYear) {
      updateBook({ ...book, title: newTitle, author: newAuthor, genre: newGenre, year: newYear });
    }
  };

  const readBooks = books.filter(b => b.read);
  const unreadBooks = books.filter(b => !b.read);

  const renderBooks = (bookList) =>
    bookList.map(book => (
      <li key={book.id} className="list-group-item shadow-sm mb-3 rounded">
        <h5 className="mb-1">{book.title} - {book.author} ({book.year})</h5>
        <p className="mb-2"><em>{book.genre}</em></p>
        <div className="d-flex gap-2">
          <button className="btn btn-sm btn-outline-success" onClick={() => toggleRead(book.id)}>
            {book.read ? 'Marcar como no leído' : 'Marcar leído'}
          </button>
          <button className="btn btn-sm btn-outline-warning" onClick={() => handleEdit(book)}>Editar</button>
          <button className="btn btn-sm btn-outline-danger" onClick={() => deleteBook(book.id)}>Eliminar</button>
        </div>
      </li>
    ));

  return (
    <div className="shadow-sm p-3 mb-4 bg-light rounded">
      <h4 className="mb-3">Libros no leídos</h4>
      <ul className="list-group mb-4">{renderBooks(unreadBooks)}</ul>

      <h4 className="mb-3">Libros leídos</h4>
      {readBooks.length === 0 ? (
        <p className="text-muted">No hay libros leídos todavía.</p>
      ) : (
        <ul className="list-group">{renderBooks(readBooks)}</ul>
      )}
    </div>
  );
}
