import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { FloatingPhone } from '@/components/animations/FloatingPhone';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const screenshots = [
  {
    id: 1,
    title: "Tu día a día",
    description: "Visualiza de un vistazo todas las tareas, citas y recordatorios pendientes para hoy.",
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    src: "/img/agenda.png",
    srcDark: "/img/agendaoscuro.png"
  },
  {
    id: 2,
    title: "Perfil Digital",
    description: "Toda la información de tu mascota: chip, peso, edad y datos importantes siempre a mano.",
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-50 dark:bg-purple-950/30",
    src: "/img/perfil.png",
    srcDark: "/img/perfiloscuro.png"
  },
  {
    id: 3,
    title: "Historial Médico",
    description: "Consulta visitas pasadas, diagnósticos y tratamientos cronológicamente.",
    color: "from-green-500 to-emerald-400",
    bg: "bg-green-50 dark:bg-green-950/30",
    src: "/img/historial.png",
    srcDark: "/img/historialoscuro.png"
  },
  {
    id: 4,
    title: "Recordatorios",
    description: "Nunca más olvidarás una pastilla o desparasitación. Alertas personalizables.",
    color: "from-orange-500 to-yellow-400",
    bg: "bg-orange-50 dark:bg-orange-950/30",
    src: "/img/calendario.png",
    srcDark: "/img/calendariooscuro.png"
  },
  {
    id: 5,
    title: "Paseos en Tiempo Real",
    description: "Registra la ruta, distancia y duración de cada paseo. ¡Mantén a tu peludo activo!",
    color: "from-indigo-500 to-primary",
    bg: "bg-indigo-50 dark:bg-indigo-950/30",
    src: "/img/paseo.png",
    srcDark: "/img/paseooscuro.png"
  }
];

export const AppShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Preload all images on mount
  useEffect(() => {
    const preloadImages = () => {
      screenshots.forEach((screenshot) => {
        // Preload light version
        const imgLight = new Image();
        imgLight.src = screenshot.src;
        
        // Preload dark version
        const imgDark = new Image();
        imgDark.src = screenshot.srcDark;
      });
    };
    
    preloadImages();
  }, []);

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
    <section id="app-showcase" className={`py-16 md:py-24 transition-colors duration-700 ${activeScreenshot.bg} overflow-hidden`}>
      <Container>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Content Side */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <ScrollReveal direction="left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6 transition-all duration-500">
                {activeScreenshot.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 lg:mb-8 min-h-[3rem] lg:min-h-[6rem]">
                {activeScreenshot.description}
              </p>
              
              {/* Controls */}
              <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8 lg:mb-12">
                <button 
                  onClick={handlePrev}
                  className="p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" />
                </button>
                
                <div className="flex gap-2 sm:gap-3">
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? `w-6 sm:w-8 bg-gray-800 dark:bg-white` 
                          : "w-2 sm:w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                      }`}
                      aria-label={`Ir a pantalla ${index + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={handleNext}
                  className="p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Phone Side */}
          <div className="order-1 lg:order-2 flex justify-center">
            <FloatingPhone
              screenshotSrc={activeScreenshot.src}
              screenshotSrcDark={activeScreenshot.srcDark}
              size="sm"
              animate={false}
              glowColor={`bg-gradient-to-tr ${activeScreenshot.color} opacity-40`}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
