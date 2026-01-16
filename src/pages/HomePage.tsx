import React from 'react';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { AppShowcase } from '@/components/sections/AppShowcase';
import { FAQSection } from '@/components/sections/FAQSection';
import { DownloadCTA } from '@/components/sections/DownloadCTA';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 flex flex-col">
      <SEO />
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <AppShowcase />
        <DownloadCTA />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};


export default HomePage;
