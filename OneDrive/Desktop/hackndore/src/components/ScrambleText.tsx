"use client";
import React, { useState, useEffect } from 'react';
import { Scramble } from 'react-scramble';

const ScrambleHeading = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Code', 'Think', 'Innovate'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl font-bold text-center mb-8">
      Where Creativity Meets Technology and 
      <span className="ml-2 text-blue-500">
        <Scramble
          autoStart
          text={words[currentWord]}
          steps={[
            {
              roll: 10,
              action: '+',
              type: 'all',
            },
            {
              action: '-',
              type: 'forward',
            },
          ]}
          seed={30}
          speed="medium"
          bindMethod="constant"
        />
      </span>
    </h1>
  );
};

export default ScrambleHeading;