import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FloatingPhone } from '@/components/animations/FloatingPhone';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
         <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-[100px]" />
         <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[80px]" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-primary" />
                4.8 en App Store
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                El mejor compañero para cuidar a tu{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  mascota
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Historial médico, recordatorios y cuidados. Todo en una sola app diseñada para amantes de los animales.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="shadow-xl shadow-primary/20" onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}>
                  Descargar Gratis
                </Button>
                <Button variant="outline" size="lg" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
                  Ver cómo funciona
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Visual Content */}
          <div className="relative mx-auto lg:ml-auto w-full max-w-sm lg:max-w-md">
            <FloatingPhone screenshotSrc="/img/agenda.png" />
            
            {/* Floating Badges */}
            <motion.div 
              className="absolute -right-4 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-xl">💉</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Próxima Vacuna</p>
                  <p className="text-sm font-bold text-gray-900">Mañana</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute -left-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xl">🐾</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Paseo Diario</p>
                  <p className="text-sm font-bold text-gray-900">Completado</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
