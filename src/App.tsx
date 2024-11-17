import { BrowserRouter as Router } from 'react-router-dom';
import Head from './components/head/Head';
import NavBar from './components/head/NavBar';
import './App.css';
import { ThemeProvider } from './components/ThemeContext';
import AppRoutes from './routes'; // Importa las rutas

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: 'url("/src/assets/fondo.jpg")'
        }}>
        {/* Overlay para mejorar la legibilidad del contenido */}
        <div className="absolute inset-0 bg-white/70 dark:bg-slate-900/80 backdrop-blur-[2px]" />
        
        <Router>
          <div className="min-h-screen">
            <Head />
            <NavBar />
            {/* Aquí van las rutas que cambiarán el contenido según la navegación */}
            <main>
              {/* Las rutas definidas en AppRoutes se manejarán aquí */}
              <AppRoutes />
            </main>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
