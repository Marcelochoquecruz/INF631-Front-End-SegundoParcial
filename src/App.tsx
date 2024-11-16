//import React from 'react'; // Importar React siempre es un buen comienzo
import { BrowserRouter as Router } from 'react-router-dom'; // El enrutador principal
import Head from './components/head/Head'; // Importar tu componente Head
import NavBar from './components/head/NavBar'; // Importar tu NavBar
import './App.css'; // Importar los estilos CSS para tu App
import Carrousel from './components/slider';
import Menu from './components/menu';
const App = () => {
  return (
    <Router>
      <div>
        <Head />
        <NavBar />
        {/* Aquí irá el resto de tus rutas/contenido */}
      </div>
      <Carrousel />
      <Menu/>
    </Router>
  );
};

export default App;
