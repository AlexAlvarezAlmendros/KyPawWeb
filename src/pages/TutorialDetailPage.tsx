import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, Clock, ArrowLeft, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { TutorialCard } from '@/components/tutorials/TutorialCard';
import { getTutorialBySlug, getRelatedTutorials, tutorialCategories } from '@/constants/tutorials';

const TutorialDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [feedback, setFeedback] = useState<'useful' | 'not-useful' | null>(null);

  const tutorial = getTutorialBySlug(slug || '');

  if (!tutorial) {
    return <Navigate to="/tutoriales" replace />;
  }

  const category = tutorialCategories.find(c => c.id === tutorial.category);
  const relatedTutorials = tutorial.relatedTutorials 
    ? getRelatedTutorials(tutorial.relatedTutorials)
    : [];

  const difficultyColors = {
    'Fácil': 'bg-green-100 text-green-700',
    'Medio': 'bg-yellow-100 text-yellow-700',
    'Avanzado': 'bg-red-100 text-red-700'
  };

  const handleFeedback = (type: 'useful' | 'not-useful') => {
    setFeedback(type);
    // Here you would normally send this to analytics
    console.log(`Tutorial ${tutorial.slug} marked as ${type}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <SEO 
        title={`${tutorial.title} - Tutoriales KyPaw`}
        description={tutorial.description}
      />
      <Header />

      <main className="flex-grow pt-20">
        {/* Breadcrumb */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
          <Container>
            <nav className="py-4 flex items-center gap-2 text-sm">
              <Link to="/tutoriales" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                Tutoriales
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link 
                to={`/tutoriales?category=${tutorial.category}`} 
                className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
              >
                {category?.name}
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-900 dark:text-white font-medium">{tutorial.title}</span>
            </nav>
          </Container>
        </div>

        {/* Tutorial Header */}
        <section className="bg-white dark:bg-gray-800 py-10 md:py-14 border-b border-gray-100 dark:border-gray-700">
          <Container>
            <Link 
              to="/tutoriales"
              className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a tutoriales</span>
            </Link>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-3xl shrink-0">
                {tutorial.categoryIcon}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  {tutorial.title}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {tutorial.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Clock className="w-5 h-5" />
                <span>{tutorial.duration} de lectura</span>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[tutorial.difficulty]}`}>
                {tutorial.difficulty}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                {tutorial.steps.length} pasos
              </span>
            </div>
          </Container>
        </section>

        {/* Tutorial Steps */}
        <section className="py-10 md:py-14">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {tutorial.steps.map((step, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4">
                      {/* Step Number */}
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0">
                        {index + 1}
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          {step.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Image placeholder */}
                        {step.image && (
                          <div className="mt-4 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                            <img 
                              src={step.image} 
                              alt={step.title}
                              className="w-full h-auto"
                            />
                          </div>
                        )}

                        {/* Tip Box */}
                        {step.tip && (
                          <div className="mt-4 p-4 bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20 rounded-xl">
                            <div className="flex items-start gap-3">
                              <span className="text-xl">💡</span>
                              <p className="text-sm text-gray-700 dark:text-gray-300">
                                <span className="font-semibold">Consejo: </span>
                                {step.tip}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Feedback Section */}
              <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Te ha sido útil este tutorial?
                </h3>
                <p className="text-gray-500 mb-4">
                  Tu opinión nos ayuda a mejorar
                </p>
                
                {feedback ? (
                  <div className="text-primary font-medium">
                    ¡Gracias por tu feedback! 🎉
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={() => handleFeedback('useful')}
                      className="flex items-center gap-2 px-6 py-3 bg-green-50 text-green-700 rounded-xl font-medium hover:bg-green-100 transition-colors"
                    >
                      <ThumbsUp className="w-5 h-5" />
                      <span>Sí, me ayudó</span>
                    </button>
                    <button
                      onClick={() => handleFeedback('not-useful')}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                    >
                      <ThumbsDown className="w-5 h-5" />
                      <span>No mucho</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* Related Tutorials */}
        {relatedTutorials.length > 0 && (
          <section className="py-10 md:py-14 bg-white border-t border-gray-100">
            <Container>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Tutoriales relacionados
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {relatedTutorials.map(tutorial => (
                  <TutorialCard key={tutorial.id} tutorial={tutorial} />
                ))}
              </div>
            </Container>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default TutorialDetailPage;
