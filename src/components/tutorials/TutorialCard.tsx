import { Link } from 'react-router-dom';
import { Clock, ChevronRight } from 'lucide-react';
import { type Tutorial } from '@/constants/tutorials';

interface TutorialCardProps {
  tutorial: Tutorial;
}

export const TutorialCard = ({ tutorial }: TutorialCardProps) => {
  const difficultyColors = {
    'Fácil': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
    'Medio': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
    'Avanzado': 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
  };

  return (
    <Link 
      to={`/tutoriales/${tutorial.slug}`}
      className="group block bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg hover:border-primary/20 dark:hover:border-primary/40 transition-all duration-300 overflow-hidden"
    >
      {/* Thumbnail area */}
      <div className="relative h-32 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 flex items-center justify-center">
        <span className="text-5xl">{tutorial.categoryIcon}</span>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[tutorial.difficulty]}`}>
            {tutorial.difficulty}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {tutorial.title}
        </h3>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
          {tutorial.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500 text-sm">
            <Clock className="w-4 h-4" />
            <span>{tutorial.duration}</span>
          </div>
          
          <div className="flex items-center gap-1 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Ver tutorial</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};
