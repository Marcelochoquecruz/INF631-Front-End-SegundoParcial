import React from 'react';
import { useTheme } from '../components/useTheme';
import { School, Target, BookOpen, Users, Heart, GraduationCap, Brain } from 'lucide-react';

interface ContenidoPProps {
  className?: string;
}

const Contenidop: React.FC<ContenidoPProps> = ({ className = '' }) => {
  const { theme } = useTheme();
  
  // Estilos base para cada tema
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-800';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gradient-to-r from-cyan-300 via-green-200 to-purple-300';
  const cardBorder = 'border-2 border-gray-300';
  const cardShadow = 'shadow-lg hover:shadow-2xl';
  const sectionBg = theme === 'dark' ? 'bg-gray-800/50' : 'bg-blue-50';
  const highlightColor = theme === 'dark' ? 'text-blue-400' : 'text-blue-800';

  // Clase contenedora para evitar repetición
  const cardClass = `${cardBg} ${cardBorder} ${cardShadow} rounded-lg p-6`;

  return (
    <div className={`${bgColor} ${textColor} min-h-screen p-4`}>
      <div className="max-w-7xl mx-auto">
        {/* Cabecera */}
        <header className="mb-12 text-center">
          <h1 className={`text-4xl font-bold ${highlightColor} mb-6 flex items-center justify-center gap-3`}>
            <School className="w-10 h-10" />
            Compromiso con la Sociedad
          </h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Compromiso con la sociedad y sus necesidades sociales, culturales y espirituales, 
            a través de la educación como herramienta de transformación.
          </p>
        </header>

        {/* Contenido Principal */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sección Objetivos */}
          <section className={`${sectionBg} rounded-lg p-6 shadow-lg`}>
            <h2 className={`text-2xl font-semibold ${highlightColor} mb-6 flex items-center gap-3`}>
              <Target className="w-6 h-6" />
              Objetivos
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-blue-500" />
                <p className="leading-relaxed">
                  Nuestra visión está arraigada en la convicción de que el soporte de la fe cristiana 
                  proporciona los valores morales y espirituales esenciales para el desarrollo de 
                  nuestra sociedad.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-blue-500" />
                <p className="leading-relaxed">
                  Consideramos que la educación es la herramienta idónea para 
                  generar una transformación profunda.
                </p>
              </div>
            </div>
          </section>

          {/* Sección Niveles */}
          <section className="space-y-6">
            <h2 className={`text-2xl font-semibold ${highlightColor} mb-4 flex items-center gap-3`}>
              <Users className="w-6 h-6" />
              Niveles
            </h2>

            {/* Nivel Inicial */}
            <div className={cardClass}>
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-blue-500" />
                <div>
                  <h3 className={`text-xl font-semibold ${highlightColor} mb-2`}>Nivel Inicial</h3>
                  <p className="leading-relaxed">
                    Nuestra misión es ofrecer una educación inclusiva que promueva 
                    valores fundamentales.
                  </p>
                </div>
              </div>
            </div>

            {/* Primaria y Secundaria */}
            <div className={cardClass}>
              <div className="flex items-start gap-4">
                <Brain className="w-8 h-8 text-blue-500" />
                <div>
                  <h3 className={`text-xl font-semibold ${highlightColor} mb-2`}>Primario y Secundario</h3>
                  <p className="leading-relaxed">
                    El objetivo es formarlos para que piensen críticamente y transformen su entorno.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contenidop;
