// pages/Principal.tsx
import Carrousel from '../components/slider';
import Menu from '../components/menu';
import Footer from '../components/footer';

const Principal = () => {
  return (
    <div>
      <Carrousel />
      <Menu />
      {/* Otro contenido específico de la página principal */}
      <Footer/>
    </div>
  );
};

export default Principal;