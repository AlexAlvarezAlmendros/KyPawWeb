import React from 'react';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FeaturesSection } from '@/components/sections/FeaturesSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO />
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        
        {/* Placeholder para siguientes secciones */}
        <section id="download" className="py-20 bg-primary text-white">
           <div className="container mx-auto px-4 text-center">
            Download Section (Próximamente)
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};


export default HomePage;
