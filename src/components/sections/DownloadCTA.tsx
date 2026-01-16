import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';

interface DownloadCTAProps {
  screenshotSrc?: string;
}

export const DownloadCTA = ({ screenshotSrc }: DownloadCTAProps) => {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600" />
      
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-white/10 blur-[60px]" />
        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-white/10 blur-[40px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[200px] h-[200px] rounded-full bg-white/5 blur-[30px]" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left text-white">
            <ScrollReveal direction="up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                ¿Listo para cuidar mejor a tu mascota?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-xl mx-auto lg:mx-0">
                Únete a miles de dueños responsables que ya gestionan la salud de sus peludos con KyPaw.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a 
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors shadow-lg shadow-black/20"
                >
                  <Apple className="w-8 h-8 fill-current" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-medium opacity-80">Consíguelo en el</div>
                    <div className="text-lg font-bold leading-none">App Store</div>
                  </div>
                </motion.a>

                <motion.a 
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors shadow-lg shadow-black/10"
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Play className="w-7 h-7 fill-gray-900 ml-1" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-medium opacity-80">Disponible en</div>
                    <div className="text-lg font-bold leading-none">Google Play</div>
                  </div>
                </motion.a>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-sm text-blue-100/80">
                <span className="flex text-yellow-400">★★★★★</span>
                <span>Más de 10,000 descargas</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual Content - Hand holding phone mockup */}
          <div className="lg:w-1/2 flex justify-center">
            <ScrollReveal direction="up" delay={0.2} className="relative">
              {/* Phone Mockup */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 w-[280px] sm:w-[320px] aspect-[9/18] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800"
              >
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-primary-50 to-white relative">
                     {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />
                    
                    {/* Screen Content Container */}
                    <img 
                      src={screenshotSrc || "/img/perfil.png"} 
                      alt="KyPaw App" 
                      className="w-full h-full object-cover relative z-10"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />

                    {/* Abstract App UI (Fallback) */}
                    <div className="hidden absolute inset-0 p-6 pt-16 flex flex-col gap-4 h-full bg-gradient-to-b from-primary-50 to-white">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-primary-100" />
                          <div className="w-24 h-4 rounded-full bg-gray-100" />
                        </div>
                        
                        {/* Card 1 */}
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                           <div className="flex gap-3 items-center mb-3">
                             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">🐾</div>
                             <div className="space-y-1">
                               <div className="w-20 h-4 rounded-full bg-gray-100" />
                               <div className="w-12 h-3 rounded-full bg-gray-50" />
                             </div>
                           </div>
                           <div className="w-full h-2 rounded-full bg-blue-50">
                             <div className="w-2/3 h-full rounded-full bg-blue-500" />
                           </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-primary-500 p-5 rounded-2xl shadow-lg shadow-primary-500/30 text-white mt-2">
                           <div className="text-2xl font-bold mb-1">Max</div>
                           <div className="text-primary-100 text-sm mb-4">Golden Retriever</div>
                           <div className="flex gap-2">
                              <div className="px-3 py-1 rounded-full bg-white/20 text-xs">Vacunas</div>
                              <div className="px-3 py-1 rounded-full bg-white/20 text-xs">Peso</div>
                           </div>
                        </div>

                        {/* List */}
                        <div className="space-y-3 mt-2">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-lg bg-gray-50" />
                               <div className="flex-1 h-3 rounded-full bg-gray-100" />
                            </div>
                          ))}
                        </div>

                        {/* Button */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="w-full h-12 rounded-xl bg-gray-900 shadow-lg" />
                        </div>
                      </div>
                  </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};
