import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const screenshots = [
  {
    id: 1,
    title: "Tu día a día",
    description: "Visualiza de un vistazo todas las tareas, citas y recordatorios pendientes para hoy.",
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
    src: "/img/agenda.png"
  },
  {
    id: 2,
    title: "Perfil Digital",
    description: "Toda la información de tu mascota: chip, peso, edad y datos importantes siempre a mano.",
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-50",
    src: "/img/perfil.png"
  },
  {
    id: 3,
    title: "Historial Médico",
    description: "Consulta visitas pasadas, diagnósticos y tratamientos cronológicamente.",
    color: "from-green-500 to-emerald-400",
    bg: "bg-green-50",
    src: "/img/historial.png"
  },
  {
    id: 4,
    title: "Recordatorios",
    description: "Nunca más olvidarás una pastilla o desparasitación. Alertas personalizables.",
    color: "from-orange-500 to-yellow-400",
    bg: "bg-orange-50",
    src: "/img/calendario.png"
  },
  {
    id: 5,
    title: "Paseos en Tiempo Real",
    description: "Registra la ruta, distancia y duración de cada paseo. ¡Mantén a tu peludo activo!",
    color: "from-indigo-500 to-primary",
    bg: "bg-indigo-50",
    src: "/img/paseo.png"
  }
];

export const AppShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [currentIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const activeScreenshot = screenshots[currentIndex];

  return (
    <section id="app-showcase" className={`py-24 transition-colors duration-700 ${activeScreenshot.bg} overflow-hidden`}>
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <ScrollReveal direction="left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 transition-all duration-500">
                {activeScreenshot.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8 h-24">
                {activeScreenshot.description}
              </p>
              
              {/* Controls */}
              <div className="flex items-center gap-6 mb-12">
                <button 
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                
                <div className="flex gap-3">
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? `w-8 bg-gray-800` 
                          : "w-2.5 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Ir a pantalla ${index + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={handleNext}
                  className="p-3 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Phone Side */}
          <div className="order-1 lg:order-2 flex justify-center perspective-1000">
            <div className="relative mx-auto w-[280px] xs:w-[300px] sm:w-[320px] aspect-[9/19]">
              {/* Screen Content Container */}
              <div className="absolute inset-[8px] rounded-[2.5rem] overflow-hidden z-10 bg-white">
                <img 
                  key={currentIndex}
                  src={activeScreenshot.src} 
                  alt={activeScreenshot.title}
                  className="w-full h-full object-cover"
                  onLoad={() => console.log('Image loaded successfully:', activeScreenshot.src)}
                  onError={(e) => {
                    console.error('❌ Image Load Failed:', activeScreenshot.src);
                    e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='600'%3E%3Crect fill='%23667eea' width='300' height='600'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E${activeScreenshot.title}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>

              {/* Phone Frame (Border only, on top) */}
              <div className="absolute inset-0 rounded-[3rem] shadow-2xl border-[8px] border-gray-900 z-20 pointer-events-none">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-30" />
              </div>

              {/* Decorative Blur behind phone */}
              <div 
                className={`absolute inset-0 bg-gradient-to-tr ${activeScreenshot.color} blur-[60px] opacity-40 -z-10 transition-all duration-700`} 
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
