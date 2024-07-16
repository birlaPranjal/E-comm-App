"use client";
import React, { useState } from 'react';
import VideoComponent from '@/components/VideoComponent';
import HomePage from '@/components/HomePage';
import { AnimatePresence, motion } from 'framer-motion';

const Index: React.FC = () => {
  const [showHomePage, setShowHomePage] = useState(false);

  const handleAnimationComplete = () => {
    setShowHomePage(true);
  };

  return (
    <div>
      <AnimatePresence>
        {!showHomePage ? (
          <motion.div
            key="video"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <VideoComponent src="/intro.mp4" onComplete={handleAnimationComplete} />
          </motion.div>
        ) : (
          <motion.div
            key="homepage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <HomePage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
