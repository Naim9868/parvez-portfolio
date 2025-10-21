"use client";
import { motion } from 'framer-motion';

export const AnimatedImage = ({ src, alt, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className={className}
    >
      <img 
        src={src} 
        alt={alt}
        className="w-full h-64 lg:h-96 object-cover"
      />
    </motion.div>
  );
};