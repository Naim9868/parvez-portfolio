"use client";
import { motion } from 'framer-motion';

export const AnimatedContent = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};