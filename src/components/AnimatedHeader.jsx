"use client";
import { motion } from 'framer-motion';

export const AnimatedHeader = ({ children, className }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={className}
    >
      {children}
    </motion.header>
  );
};