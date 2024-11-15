import React from 'react';

const Head: React.FC = () => {
  return (
    <header className="flex items-center bg-gray-800 text-white p-4">
      <div className="flex items-center">
        <img
          src="src/assets/escudo.png"  // Ajusta la ruta de la imagen según donde la tengas
          alt="Escudo del colegio"
          className="w-20 h-20 mr-4"  // Ajuste del tamaño (16x16)
        />
        <div>
          <h1 className="text-3xl font-bold">COLEGIO ALTERNATIVO</h1>
          <p className="text-sm text-gray-300">Educación con Valores</p>
        </div>
      </div>
    </header>
  );
};

export default Head;
