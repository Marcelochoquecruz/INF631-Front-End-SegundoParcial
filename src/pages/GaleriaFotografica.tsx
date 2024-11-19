import React, { useState } from 'react';
import { X } from 'lucide-react';

// Imágenes locales
import Laboratorio1 from '../assets/edu.png';
import Laboratorio2 from '../assets/edu.png';
import Biblioteca1 from '../assets/edu.png';
import Biblioteca2 from '../assets/edu.png';
import Clase1 from '../assets/edu.png';
import Clase2 from '../assets/edu.png';
import { useTheme } from '../components/useTheme';

const images = [
  { id: 1, src: Laboratorio1, alt: 'Laboratorio de Ciencias 1', category: 'Instalaciones' },
  { id: 2, src: Laboratorio2, alt: 'Laboratorio de Ciencias 2', category: 'Instalaciones' },
  { id: 3, src: Biblioteca1, alt: 'Biblioteca Escolar 1', category: 'Instalaciones' },
  { id: 4, src: Biblioteca2, alt: 'Biblioteca Escolar 2', category: 'Instalaciones' },
  { id: 5, src: Clase1, alt: 'Estudiantes en Clase 1', category: 'Vida Estudiantil' },
  { id: 6, src: Clase2, alt: 'Estudiantes en Clase 2', category: 'Vida Estudiantil' },
];

const GaleriaFotografica: React.FC = () => {
  const { theme } = useTheme();
  const [imagenSeleccionada, setImagenSeleccionada] = useState<{ src: string; alt: string } | null>(null);
  const [filtro, setFiltro] = useState<string>('Todos');

  const categorias = ['Todos', ...new Set(images.map(img => img.category))];

  const imagenesFiltradas = filtro === 'Todos' ? images : images.filter(img => img.category === filtro);

  // Estilos dinámicos basados en el tema
  const estilosTema = {
    contenedor: theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800',
    titulo: theme === 'dark' ? 'text-white' : 'text-gray-800',
    boton: theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
  };

  return (
    <div className={`w-full h-full ${estilosTema.contenedor}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-4xl font-bold ${estilosTema.titulo}`}>Galería Fotográfica</h1>
      </div>

      {/* Filtros de Categoría */}
      <div className="flex justify-center space-x-4 mb-8">
        {categorias.map(categoria => (
          <button
            key={categoria}
            onClick={() => setFiltro(categoria)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filtro === categoria ? 'bg-blue-500 text-white' : estilosTema.boton
            }`}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Cuadrícula de Imágenes */}
      <div className="grid grid-cols-3 gap-4">
        {imagenesFiltradas.map(imagen => (
          <div
            key={imagen.id}
            className={`overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
            onClick={() => setImagenSeleccionada(imagen)}
          >
            <img src={imagen.src} alt={imagen.alt} className="w-full h-48 object-cover" />
            <p
              className={`text-center py-2 ${
                theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
              }`}
            >
              {imagen.alt}
            </p>
          </div>
        ))}
      </div>

      {/* Modal de Imagen Ampliada */}
      {imagenSeleccionada && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center ${
            theme === 'dark' ? 'bg-black bg-opacity-80' : 'bg-black bg-opacity-75'
          }`}
          onClick={() => setImagenSeleccionada(null)}
        >
          <div className="max-w-4xl max-h-[90vh] relative" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setImagenSeleccionada(null)}
              className={`absolute top-2 right-2 rounded-full p-2 shadow-lg z-60 ${
                theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'
              }`}
            >
              <X />
            </button>
            <img src={imagenSeleccionada.src} alt={imagenSeleccionada.alt} className="w-full h-full object-contain rounded-lg" />
            <p className={`text-center mt-4 text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              {imagenSeleccionada.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaFotografica;
