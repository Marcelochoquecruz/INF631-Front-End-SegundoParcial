import React from 'react';
import { Link } from 'react-router-dom';

const Principal: React.FC = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold text-gray-800">Bienvenido a la Página Principal</h1>
      <p className="mt-4 text-lg text-gray-600">Navega a las secciones a continuación:</p>
      <div className="mt-8 flex justify-center space-x-6">
        <Link to="/institucional" className="text-blue-500 hover:text-blue-700">Institucional</Link>
        <Link to="/fotos" className="text-blue-500 hover:text-blue-700">Fotos</Link>
        <Link to="/inscripciones" className="text-blue-500 hover:text-blue-700">Inscripciones</Link>
        <Link to="/cuotas" className="text-blue-500 hover:text-blue-700">Cuotas</Link>
        <Link to="/contacto" className="text-blue-500 hover:text-blue-700">Contacto</Link>
      </div>
    </div>
  );
};

export default Principal;
