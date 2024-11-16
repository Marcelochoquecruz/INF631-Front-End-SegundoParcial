import React from 'react';
import { FaHandsHelping, FaGraduationCap } from 'react-icons/fa';

const Objetivos = () => {
  return (
    <section className="bg-white/70 backdrop-blur-md py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8">Comprometidos con la sociedad y sus necesidades sociales, culturales y espirituales, a partir de la educación como herramienta de transformación.</h2>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="flex flex-col items-center text-center">
            <FaHandsHelping className="text-6xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-medium text-gray-800 mb-4">Objetivos</h3>
            <p className="text-lg text-gray-600">
              Entendemos que el soporte de la fe cristiana aporta los valores morales y espirituales que necesita nuestra sociedad, y concebimos a la educación como una herramienta de transformación humana y social idónea para lograr ese propósito.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaGraduationCap className="text-6xl text-green-500 mb-4" />
            <h3 className="text-2xl font-medium text-gray-800 mb-4">Niveles</h3>
            <p className="text-lg text-gray-600">
              Desde los más pequeños - NIVEL INICIAL - nos orientamos "hacia una escuela inclusiva, que educa en valores"; a los más grandes - PRIMARIO y SECUNDARIO - los formamos "para pensar, pensar para actuar y actuar para transformar".
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objetivos;
