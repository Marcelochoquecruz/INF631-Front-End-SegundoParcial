import React from 'react';
import Footer from '../components/footer';
import { BookOpen, Users, Heart, Sparkles, GraduationCap } from 'lucide-react';
import { useTheme } from '../components/useTheme';

const Institucional = () => {
  const { theme } = useTheme();

  // Estilos basados en el tema actual
  const themeStyles = {
    bg: theme === 'dark' ? 'bg-slate-900' : 'bg-white',
    text: theme === 'dark' ? 'text-white' : 'text-slate-900',
    cardBg: theme === 'dark' ? 'bg-slate-800' : 'bg-slate-50',
    accent: theme === 'dark' ? 'text-sky-500' : 'text-sky-600',
    border: theme === 'dark' ? 'border-slate-700' : 'border-slate-200',
    // Añadimos un fondo claro a los contenedores para mayor legibilidad
    cardContainer: theme === 'dark' ? 'bg-slate-800' : 'bg-white',
  };

  return (
    <div className={`${themeStyles.bg} ${themeStyles.text}`}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="py-12 sm:py-16 flex flex-col items-center">
          <GraduationCap className={`w-16 h-16 ${themeStyles.accent} mb-6`} />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Institucional</h1>
          <div className={`w-24 h-1 ${themeStyles.accent}`}></div>
        </header>

        {/* Main Content */}
        <div className="py-8 space-y-8">
          {/* Nuestra Filosofía - Full Width */}
          <div className={`${themeStyles.cardBg} p-8 rounded-lg border ${themeStyles.border} w-full`}>
            <div className="flex items-start gap-4">
              <Heart className={`w-8 h-8 ${themeStyles.accent} shrink-0`} />
              <div>
                <h2 className="text-2xl font-bold mb-4">Nuestra Filosofía Educativa</h2>
                <p className="text-lg">
                  Nos comprometemos a formar estudiantes desde la educación inicial hasta la secundaria, 
                  integrando valores, creatividad y pensamiento crítico en cada etapa educativa.
                </p>
              </div>
            </div>
          </div>

          {/* Desarrollo Educativo and Equipo Docente - Two Columns */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${themeStyles.cardBg} p-8 rounded-lg border ${themeStyles.border}`}>
              <div className="flex items-start gap-4">
                <BookOpen className={`w-8 h-8 ${themeStyles.accent} shrink-0`} />
                <div>
                  <h3 className="text-xl font-bold mb-3">Desarrollo Educativo</h3>
                  <p>
                    Buscamos despertar la curiosidad natural de los niños, mientras que en primaria y secundaria 
                    fortalecemos sus habilidades académicas y sociales.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${themeStyles.cardBg} p-8 rounded-lg border ${themeStyles.border}`}>
              <div className="flex items-start gap-4">
                <Users className={`w-8 h-8 ${themeStyles.accent} shrink-0`} />
                <div>
                  <h3 className="text-xl font-bold mb-3">Equipo Docente</h3>
                  <p>
                    Nuestro equipo docente está formado por profesionales innovadores, comprometidos con una formación 
                    de calidad que inspire a los estudiantes a ser líderes responsables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12">
          <div className="grid sm:grid-cols-3 gap-8">
            {[{
              icon: <Sparkles className="w-6 h-6" />,
              title: "Innovación Educativa",
              text: "Metodologías modernas adaptadas a cada nivel"
            },
            {
              icon: <Heart className="w-6 h-6" />,
              title: "Formación en Valores",
              text: "Desarrollo integral del estudiante"
            },
            {
              icon: <BookOpen className="w-6 h-6" />,
              title: "Excelencia Académica",
              text: "Estándares educativos de alta calidad"
            }].map((feature, index) => (
              <div key={index} className={`${themeStyles.cardBg} p-6 rounded-lg border ${themeStyles.border}`}>
                <div className={`${themeStyles.accent} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p>{feature.text}</p>
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
