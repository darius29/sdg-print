'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export const Reveal = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);
