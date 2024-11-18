import React from 'react';
import { MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useTheme } from './useTheme'; // Asegúrate de importar correctamente el custom hook

const Footer: React.FC = () => {
  // Acceder al tema mediante el custom hook
  const { theme } = useTheme();  // Desestructuración para obtener el tema

  return (
    <footer className={`mt-auto relative ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Línea superior de color sólido */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'}`}></div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Columna de información */}
          <div className="md:col-span-2 space-y-3 p-4 rounded-lg" 
               style={{ backgroundColor: theme === 'dark' ? '#2D2D2D' : '#F9F9F9' }}>
            <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'}`}>Información</h3>
            <div className="space-y-2 text-sm">
              <div>
                <p className={`font-medium ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Nivel Inicial</p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Sala 3, 4 y 5 - Turno Mañana</p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Sala 4 y 5 - Turno Tarde</p>
              </div>
              <div className="pt-2">
                <p className={`font-medium ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Nivel Primario</p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>1° a 2° - Turno Mañana</p>
              </div>
              <div className="pt-2">
                <p className={`font-medium ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Nivel Secundario y CENS</p>
              </div>
              <div className="pt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className={`w-4 h-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                  <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Av. España 22 - Ciudad de Potosí</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className={`w-4 h-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                  <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Tel: (591) 622-4845</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className={`w-4 h-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                  <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Cel: (591) 753-3346</p>
                </div>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} italic`}>Personería: 512/88</p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="md:col-span-8 space-y-4">
            <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'} text-center`}>
              Nuestra Ubicación
            </h3>
            <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.888349078661!2d-65.75387482584543!3d-19.589344982158394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f94e733a7c7f3f%3A0x58961e56c0f44c1d!2sAv.%20Espa%C3%B1a%2C%20Potos%C3%AD%2C%20Bolivia!5e0!3m2!1ses!2ses!4v1700179047037!5m2!1ses!2ses"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Columna del menú */}
          <div className="md:col-span-2 p-4 rounded-lg" style={{ backgroundColor: theme === 'dark' ? '#2D2D2D' : '#F9F9F9' }}>
            <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'} mb-4`}>MENÚ</h3>
            <nav className="space-y-2 text-sm">
              <a href="/" className={`block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Página Principal</a>
              <a href="/institucional" className={`block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Institucional</a>
              <a href="/propositos" className={`block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} pl-3 text-xs`}>• Propósitos</a>
              <a href="/objetivos" className={`block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} pl-3 text-xs`}>• Objetivos Institucionales</a>
              <a href="/historia" className={`block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} pl-3 text-xs`}>• Reseña Histórica</a>
              <a href="/galeria" className={`block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Galería de Fotos</a>
              <a href="/inscripciones" className={`block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Inscripciones 2021</a>
              <a href="/cuotas" className={`block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Cuotas 2021</a>
              <a href="/contacto" className={`block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Contacto</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <div className="border-t mt-8">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/ies.png"
                alt="Logo"
                className="w-16 h-16"
              />
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>© 2024 Instituto Educativo Superior</p>
            </div>
            <div className="flex gap-4">
              <Facebook className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              <Twitter className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              <Instagram className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              <Linkedin className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
