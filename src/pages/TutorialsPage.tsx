import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { TutorialCard } from '@/components/tutorials/TutorialCard';
import { tutorials, tutorialCategories } from '@/constants/tutorials';

const TutorialsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter tutorials based on search and category
  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = searchQuery === '' || 
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === null || tutorial.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSearchQuery('');
    setActiveCategory(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Tutoriales - KyPaw"
        description="Aprende a usar KyPaw con nuestros tutoriales paso a paso. Guías completas para gestionar la salud y cuidados de tu mascota."
      />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary py-16 md:py-24">
          <Container>
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Centro de Ayuda KyPaw
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Tutoriales paso a paso para sacar el máximo partido a tu app
              </p>

              {/* Search Bar */}
              <div className="max-w-xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar tutoriales..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* Categories and Tutorials */}
        <section className="py-12 md:py-16">
          <Container>
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === null
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Todos
              </button>
              {tutorialCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Active filters indicator */}
            {(searchQuery || activeCategory) && (
              <div className="flex items-center gap-3 mb-6">
                <span className="text-gray-500 text-sm">
                  {filteredTutorials.length} {filteredTutorials.length === 1 ? 'tutorial encontrado' : 'tutoriales encontrados'}
                </span>
                <button
                  onClick={clearFilters}
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Limpiar filtros
                </button>
              </div>
            )}

            {/* Tutorials Grid */}
            {filteredTutorials.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTutorials.map(tutorial => (
                  <TutorialCard key={tutorial.id} tutorial={tutorial} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No encontramos tutoriales
                </h3>
                <p className="text-gray-500 mb-6">
                  No hay tutoriales que coincidan con tu búsqueda. ¿Probamos con otras palabras?
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-600 transition-colors"
                >
                  Ver todos los tutoriales
                </button>
              </div>
            )}
          </Container>
        </section>

        {/* Help CTA */}
        <section className="py-12 bg-white border-t border-gray-100">
          <Container>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                ¿No encuentras lo que buscas?
              </h2>
              <p className="text-gray-600 mb-6">
                Nuestro equipo está aquí para ayudarte con cualquier duda.
              </p>
              <a 
                href="mailto:soporte@kypaw.app"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                Contactar soporte
              </a>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TutorialsPage;
