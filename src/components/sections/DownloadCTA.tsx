import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { FloatingPhone } from '@/components/animations/FloatingPhone';
import { motion } from 'framer-motion';

// Apple Logo SVG Component (Official App Store style)
const AppleLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 384 512" fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

// Google Play Logo SVG Component
const GooglePlayLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 512 512" fill="currentColor">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
  </svg>
);

interface DownloadCTAProps {
  screenshotSrc?: string;
  screenshotSrcDark?: string;
}

export const DownloadCTA = ({ screenshotSrc, screenshotSrcDark }: DownloadCTAProps) => {
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
                  <AppleLogo className="w-8 h-8" />
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
                  <GooglePlayLogo className="w-7 h-7" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-medium opacity-80">Disponible en</div>
                    <div className="text-lg font-bold leading-none">Google Play</div>
                  </div>
                </motion.a>
              </div>

              {/* <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-sm text-blue-100/80">
                <span className="flex text-yellow-400">★★★★★</span>
                <span>Más de 10,000 descargas</span>
              </div> */}
            </ScrollReveal>
          </div>

          {/* Visual Content - Phone mockup */}
          <div className="lg:w-1/2 flex justify-center">
            <ScrollReveal direction="up" delay={0.2}>
              <FloatingPhone
                screenshotSrc={screenshotSrc || "/img/perfil.png"}
                screenshotSrcDark={screenshotSrcDark || "/img/perfiloscuro.png"}
                size="md"
                glowColor="bg-white/20"
              />
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};
