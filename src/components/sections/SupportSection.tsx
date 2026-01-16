import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Heart, Coffee, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export const SupportSection = () => {
  return (
    <section id="support" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900/30 mb-6">
              <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Apoya el Desarrollo del Proyecto
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
              Este proyecto es 100% gratis y de código abierto. Si te gusta y te resulta útil, 
              considera apoyarlo con una donación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="https://donate.stripe.com/9B6fZi5K7a8Obedf6AaR201"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-xl shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/30 transition-shadow"
              >
                <Coffee className="w-5 h-5" />
                <span>Invítame a un café</span>
              </motion.a>

              <motion.a
                href="https://github.com/AlexAlvarezAlmendros/kypaw"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <Github className="w-5 h-5" />
                <span>Star en GitHub</span>
              </motion.a>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Tu apoyo ayuda a mantener el proyecto activo y añadir nuevas características ✨
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};
