
import { Routes, Route } from 'react-router-dom';

// Importa tus páginas
import Principal from '../pages/Principal';
import Institucional from '../pages/Institucional';
import Fotos from '../pages/GaleriaFotografica';
import Inscripciones from '../pages/Inscripciones';
import Cuotas from '../pages/Cuotas';
import Contacto from '../pages/Contacto';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/institucional" element={<Institucional />} />
      <Route path="/fotos" element={<Fotos />} />
      <Route path="/inscripciones" element={<Inscripciones />} />
      <Route path="/cuotas" element={<Cuotas />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
};

export default AppRoutes;