import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Características', href: '/#features' },
  { name: 'Tutoriales', href: '/tutoriales' },
  { name: 'FAQ', href: '/#faq' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if we're on a page with dark hero (like tutorials)
  const hasDarkHero = location.pathname.startsWith('/tutoriales');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine text color based on scroll and page
  const shouldUseWhiteText = hasDarkHero && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center z-50">
            <img 
              src="/img/logotipoclaro.png" 
              alt="KyPaw - Cuida. Organiza. Recuerda." 
              className={cn(
                "h-8 w-auto transition-all",
                shouldUseWhiteText && "brightness-0 invert"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  shouldUseWhiteText 
                    ? "text-white/90 hover:text-white" 
                    : "text-gray-600 hover:text-primary"
                )}
              >
                {item.name}
              </a>
            ))}
            <Button 
              size="sm" 
              className="gap-2"
              variant={shouldUseWhiteText ? "secondary" : "default"}
              onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Download className="w-4 h-4" />
              Descargar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden z-50 p-2 transition-colors",
              shouldUseWhiteText ? "text-white" : "text-gray-600"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute inset-x-0 top-0 bg-white p-6 pt-24 shadow-xl md:hidden"
              >
                <div className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button className="w-full justify-center gap-2" onClick={() => {
                      setMobileMenuOpen(false);
                      document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    <Download className="w-4 h-4" />
                    Descargar App
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </Container>
    </header>
  );
};
