import 'bootstrap/dist/css/bootstrap.min.css';
import { BookProvider } from './context/BookContext';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Filters from './components/Filters';

function App() {
  return (
    <BookProvider>
      <div className="min-vh-100 bg-light d-flex justify-content-center align-items-start py-5">
        <div className="container p-4 rounded shadow bg-white" style={{ maxWidth: '800px' }}>
          <h1 className="text-center mb-4">Gestión de Libros</h1>
          <BookForm />
          <Filters />
          <BookList />
        </div>
      </div>
    </BookProvider>
  );
}

export default App;
