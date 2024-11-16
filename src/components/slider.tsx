import React, { useState, useEffect } from 'react';

const Carrousel = () => {
  const [index, setIndex] = useState(0);

  const data = [
    {
      image: 'src/assets/slider.jpg',
      nivel: 'Nivel Inicial',
      descripcion: 'Educación con Valores',
    },
    {
      image: 'src/assets/slider1.jpg',
      nivel: 'Nivel Primario',
      descripcion: 'Educación en Valores',
    },
    {
      image: 'src/assets/slider2.jpg',
      nivel: 'Nivel Secundario',
      descripcion: 'Educación para pensar',
    },
    {
      image: 'src/assets/slider3.jpg',
      nivel: 'Nivel C.E.N.S',
      descripcion: 'Educación para transformar',
    },
  ];

  // Avanzar al siguiente índice automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); // 5 milisegundos = 3 segundos

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [data.length]);

  const handlePrev = () => {
    setIndex((index - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % data.length);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black dark:bg-[#1c1c1c]">
      <div className="w-full h-full relative overflow-hidden">
        <img
          src={data[index].image}
          alt="Carousel Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 dark:bg-opacity-90 text-white p-6 rounded-lg max-w-lg">
          <h3 className="text-3xl font-bold text-yellow-500">{data[index].nivel}</h3>
          <h3 className="text-2xl font-bold text-white opacity-80">{data[index].descripcion}</h3>
        </div>
        <div className="absolute flex justify-between w-full px-4 top-1/2 transform -translate-y-1/2">
          <button
            className="p-2 rounded-full bg-gray-800 bg-opacity-50 hover:bg-gray-700 dark:bg-opacity-60 dark:hover:bg-opacity-80"
            onClick={handlePrev}
          >
            {/* SVG del botón anterior */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white dark:text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="p-2 rounded-full bg-gray-800 bg-opacity-50 hover:bg-gray-700 dark:bg-opacity-60 dark:hover:bg-opacity-80"
            onClick={handleNext}
          >
            {/* SVG del botón siguiente */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white dark:text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
