import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
  variant?: 'default' | 'compact';
}

export const ThemeToggle = ({ className, variant = 'default' }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  if (variant === 'compact') {
    return (
      <button
        onClick={toggleTheme}
        className={cn(
          "p-2 rounded-lg transition-colors",
          "hover:bg-gray-100 dark:hover:bg-gray-800",
          "text-gray-600 dark:text-gray-400",
          className
        )}
        aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      >
        {isDark ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative flex items-center w-16 h-8 rounded-full p-1 transition-colors duration-300",
        isDark ? "bg-primary-600" : "bg-gray-200",
        className
      )}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {/* Icons */}
      <Sun className={cn(
        "absolute left-1.5 w-4 h-4 transition-opacity duration-300",
        isDark ? "opacity-50 text-gray-400" : "opacity-100 text-yellow-500"
      )} />
      <Moon className={cn(
        "absolute right-1.5 w-4 h-4 transition-opacity duration-300",
        isDark ? "opacity-100 text-white" : "opacity-50 text-gray-400"
      )} />
      
      {/* Toggle Circle */}
      <motion.div
        className="w-6 h-6 rounded-full bg-white shadow-md"
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </button>
  );
};
