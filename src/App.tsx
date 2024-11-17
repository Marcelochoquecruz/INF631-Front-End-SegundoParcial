import { BrowserRouter as Router } from 'react-router-dom';

import Head from './components/head/Head';
import NavBar from './components/head/NavBar';
import './App.css';
import { ThemeProvider } from './components/ThemeContext';
import AppRoutes from './routes'; // Importa las rutas


const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen">
          <Head />
          <NavBar />
          {/* Aquí decidimos qué componentes queremos que se muestren siempre y cuáles 
              deben cambiar según la ruta */}
          <main>
            {/* Componentes que se muestran solo en la página principal */}
            {window.location.pathname === '/' && (
              <>
               
              </>
            )}
            {/* Aquí van las rutas que cambiarán el contenido según la navegación */}
            <AppRoutes />
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;