import { BrowserRouter as Router } from 'react-router-dom';
import Head from './components/head/Head';
import NavBar from './components/head/NavBar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Head />
        <NavBar />
        {/* Aquí irá el resto de tus rutas/contenido */}
      </div>
    </Router>
  );
};

export default App;