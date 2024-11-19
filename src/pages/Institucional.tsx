import React from 'react';
import Footer from '../components/footer';
import { BookOpen, Users, Heart, Sparkles, GraduationCap } from 'lucide-react';
import { useTheme } from '../components/useTheme';

const Institucional = () => {
  const { theme } = useTheme();

  // Estilos basados en el tema actual, ahora con colores cálidos y elegantes
  const themeStyles = {
    bg: theme === 'dark' ? 'bg-slate-900' : 'bg-white',
    text: theme === 'dark' ? 'text-white' : 'text-slate-900',
    accent: theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600',
    border: theme === 'dark' ? 'border-slate-700' : 'border-slate-200',
    cardBg: theme === 'dark' ? 'bg-slate-800' : 'bg-white',
  };

  // Clase común para las tarjetas con margenes y padding más pequeños
  const cardClass = `${themeStyles.cardBg} p-6 rounded-lg border ${themeStyles.border} space-y-4`;

  return (
    <div className={`${themeStyles.bg} ${themeStyles.text}`}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="py-8 sm:py-12 flex flex-col items-center">
          <GraduationCap className={`w-12 h-12 ${themeStyles.accent} mb-4`} />
          <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-yellow-600">Institucional</h1>
          <div className={`w-20 h-1 ${themeStyles.accent} bg-yellow-400`}></div>
        </header>

        {/* Main Content */}
        <div className="py-6 space-y-6">
          {/* Nuestra Filosofía */}
          <div className={cardClass}>
            <div className="flex items-start gap-3">
              <Heart className={`w-7 h-7 text-yellow-400`} />
              <div>
                <h2 className="text-xl font-semibold mb-2 text-yellow-500">Nuestra Filosofía Educativa</h2>
                <p className="text-lg">
                  Nos comprometemos a formar estudiantes con valores, creatividad y pensamiento crítico en cada etapa educativa.
                </p>
              </div>
            </div>
          </div>

          {/* Desarrollo Educativo y Equipo Docente - Dos Columnas */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className={cardClass}>
              <div className="flex items-start gap-3">
                <BookOpen className={`w-7 h-7 text-yellow-500`} />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-500">Desarrollo Educativo</h3>
                  <p>
                    Fomentamos la curiosidad natural en los niños, mientras fortalecemos sus habilidades académicas en niveles superiores.
                  </p>
                </div>
              </div>
            </div>

            <div className={cardClass}>
              <div className="flex items-start gap-3">
                <Users className={`w-7 h-7 text-yellow-500`} />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-500">Equipo Docente</h3>
                  <p>
                    Nuestro equipo docente está compuesto por profesionales innovadores comprometidos con una educación de calidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {[{
              icon: <Sparkles className="w-6 h-6 text-yellow-400" />,
              title: "Innovación Educativa",
              text: "Metodologías modernas adaptadas a cada nivel"
            },
            {
              icon: <Heart className="w-6 h-6 text-yellow-500" />,
              title: "Formación en Valores",
              text: "Desarrollo integral del estudiante"
            },
            {
              icon: <BookOpen className="w-6 h-6 text-yellow-600" />,
              title: "Excelencia Académica",
              text: "Estándares educativos de alta calidad"
            }].map((feature, index) => (
              <div key={index} className={`${cardClass} transition duration-300 hover:scale-105`}>
                <div className={`mb-3`}>
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2 text-yellow-500">{feature.title}</h3>
                <p className="text-lg">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Institucional;
