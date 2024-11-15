import React from 'react';
import { FaSchool } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

const Head: React.FC = () => {
  return (
    <header className="flex items-center bg-gray-800 text-white p-4">
      <FaSchool className="text-4xl mr-4 text-yellow-400" /> {/* Icono a la izquierda */}
      <div>
        <h1 className="text-3xl font-bold">COLEGIO ALTERNATIVO</h1> {/* Título grande */}
        <p className="text-sm text-gray-300">Educación con Valores</p> {/* Subtítulo */}
      </div>
    </header>
  );
};

export default Head;
