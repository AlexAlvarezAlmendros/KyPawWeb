// src/components/animations/FloatingPhone.tsx

import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

interface FloatingPhoneProps {
  screenshotSrc?: string;
  screenshotSrcDark?: string;
  className?: string;
  animate?: boolean;
  size?: 'sm' | 'md' | 'lg';
  glowColor?: string;
}

export const FloatingPhone = ({ 
  screenshotSrc, 
  screenshotSrcDark, 
  className,
  animate = true,
  size = 'md',
  glowColor
}: FloatingPhoneProps) => {
  const { theme } = useTheme();
  const currentSrc = theme === 'dark' && screenshotSrcDark ? screenshotSrcDark : screenshotSrc;
  
  // Size configurations
  const sizeClasses = {
    sm: 'w-[220px] sm:w-[260px]',
    md: 'w-[260px] sm:w-[300px] lg:w-[320px]',
    lg: 'w-[280px] sm:w-[320px] lg:w-[360px]'
  };

  const frameClasses = {
    sm: 'rounded-[2.5rem] sm:rounded-[3rem] p-[6px] sm:p-2 border-[5px] sm:border-[6px]',
    md: 'rounded-[3rem] p-2 sm:p-3 border-[6px] sm:border-[8px]',
    lg: 'rounded-[3rem] p-3 border-[6px] sm:border-8'
  };

  const screenClasses = {
    sm: 'rounded-[2rem] sm:rounded-[2.5rem]',
    md: 'rounded-[2.5rem]',
    lg: 'rounded-[2.5rem]'
  };

  const notchClasses = {
    sm: 'w-24 sm:w-28 h-5 sm:h-6 rounded-b-xl sm:rounded-b-2xl',
    md: 'w-28 sm:w-32 h-5 sm:h-6 rounded-b-xl sm:rounded-b-2xl',
    lg: 'w-32 h-6 rounded-b-2xl'
  };

  const animationProps = animate ? {
    initial: { y: 0, rotateY: 0, rotateX: 0 },
    animate: {
      y: [-10, 10, -10],
      rotateY: [-3, 3, -3],
      rotateX: [-2, 2, -2],
    },
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    }
  } : {};

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} aspect-[9/19] ${className}`}
      {...animationProps}
      style={{ perspective: 1000 }}
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 ${glowColor || 'bg-gradient-to-r from-primary-500/30 to-secondary-500/30'} blur-3xl rounded-full -z-10`}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Phone frame - lighter in dark mode for contrast */}
      <div className={`relative z-10 bg-gray-900 dark:bg-gray-300 ${frameClasses[size]} shadow-2xl border-gray-800 dark:border-gray-400`}>
        <div className={`bg-black dark:bg-gray-800 ${screenClasses[size]} overflow-hidden h-full relative`}>
          {/* Notch */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 ${notchClasses[size]} bg-gray-900 dark:bg-gray-300 z-20`} />
          
          {/* Screen Content */}
          {currentSrc ? (
            <img
              key={currentSrc}
              src={currentSrc}
              alt="KyPaw App Screenshot"
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-b from-primary/10 to-secondary/10 flex items-center justify-center">
              <span className="text-gray-500">App Screenshot</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
