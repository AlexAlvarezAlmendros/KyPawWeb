import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

const navigation = [
  { name: 'Características', href: '/#features' },
  { name: 'Tutoriales', href: '/tutoriales' },
  { name: 'FAQ', href: '/#faq' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();
  
  // Check if we're on a page with dark hero (only tutorials listing page, not detail)
  const hasDarkHero = location.pathname === '/tutoriales';

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
        isScrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-4" 
          : "bg-transparent py-6"
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
                (shouldUseWhiteText || theme === 'dark') && "brightness-0 invert"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  shouldUseWhiteText 
                    ? "text-white/90 hover:text-white" 
                    : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400"
                )}
              >
                {item.name}
              </a>
            ))}
            
            <ThemeToggle variant="compact" />
            
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
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle variant="compact" />
            <button
              className={cn(
                "z-50 p-2 transition-colors",
                shouldUseWhiteText ? "text-white" : "text-gray-600 dark:text-gray-300"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute inset-x-0 top-0 bg-white dark:bg-gray-900 p-6 pt-24 shadow-xl md:hidden"
              >
                <div className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-900 dark:text-white"
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
