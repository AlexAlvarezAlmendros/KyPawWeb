// src/components/animations/FloatingPhone.tsx

import { motion } from 'framer-motion';

interface FloatingPhoneProps {
  screenshotSrc?: string;
  className?: string;
}

export const FloatingPhone = ({ screenshotSrc, className }: FloatingPhoneProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ y: 0, rotateY: 0, rotateX: 0 }}
      animate={{
        y: [-10, 10, -10],
        rotateY: [-3, 3, -3],
        rotateX: [-2, 2, -2],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ perspective: 1000 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 blur-3xl rounded-full"
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
      
      {/* Phone frame */}
      <div className="relative z-10 bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
        <div className="bg-black rounded-[2.5rem] overflow-hidden aspect-[9/19] relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />
          
          {/* Screen Content - Placeholder if no image */}
          {screenshotSrc ? (
            <img
              src={screenshotSrc}
              alt="KyPaw App Screenshot"
              className="w-full h-full object-cover"
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
