'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface ThunderLineProps {
  isActive: boolean;
  direction?: 'left-to-right' | 'right-to-left';
  className?: string;
}

const ThunderLine: React.FC<ThunderLineProps> = ({
  isActive,
  direction = 'left-to-right',
  className = '',
}) => {
  const controls = useAnimation();
  const shimmerControls = useAnimation();
  const thunderRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isActive) {
      // Reset the animations
      controls.set({ opacity: 0, pathLength: 0 });
      
      // Start the lightning animation sequence
      controls.start({
        opacity: [0, 1, 0.8, 1, 0.6, 0.8, 0],
        pathLength: 1,
        transition: { 
          opacity: { 
            times: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
            duration: 0.7 
          },
          pathLength: { duration: 0.4 },
        }
      });
      
      // Start the shimmer animation
      shimmerControls.start({
        left: direction === 'left-to-right' ? '100%' : '0%',
        opacity: [0, 1, 0.8, 0],
        transition: { 
          duration: 0.6, 
          ease: "easeOut"
        }
      });
    }
  }, [isActive, controls, shimmerControls, direction]);

  // Generate a zig-zag path for the lightning
  const generateLightningPath = () => {
    // More dynamic zig-zag pattern
    const segments = 5; // Number of zig-zags
    const amplitude = 3; // Height of zig-zags
    const randomOffsets = Array(segments).fill(0).map(() => Math.random() * amplitude - amplitude/2);
    
    let path = direction === 'left-to-right' ? 'M0,5 ' : 'M100,5 ';
    
    if (direction === 'left-to-right') {
      for (let i = 1; i <= segments; i++) {
        const x = (i * 100) / segments;
        const y = 5 + randomOffsets[i-1];
        path += `L${x},${y} `;
      }
    } else {
      for (let i = segments - 1; i >= 0; i--) {
        const x = (i * 100) / segments;
        const y = 5 + randomOffsets[i];
        path += `L${x},${y} `;
      }
    }
    
    return path;
  };
  
  // Create two slightly different paths for a more dynamic look
  const lightningPath1 = generateLightningPath();
  const lightningPath2 = generateLightningPath();

  return (
    <div 
      ref={thunderRef}
      className={`relative h-2 ${direction === 'left-to-right' ? 'ml-2 mr-2' : 'ml-2 mr-2'} ${className}`}
    >
      {/* Base connection line */}
      <div className={`absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2 rounded-full
                       ${isActive ? 'bg-gradient-to-r from-blue-600 to-indigo-500' : 'bg-gradient-to-r from-indigo-500/40 to-blue-500/40'}`}
      />
      
      {/* Lightning effect SVG */}
      <motion.svg 
        className="absolute top-1/2 w-full transform -translate-y-1/2 z-10"
        viewBox="0 0 100 10"
        initial={{ opacity: 0 }}
        animate={controls}
      >
        <defs>
          <filter id="lightning-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="lightning-gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#818CF8" />
          </linearGradient>
        </defs>
        
        {/* Glow path */}
        <motion.path
          d={lightningPath1}
          stroke="white"
          strokeWidth="2"
          fill="none"
          filter="url(#lightning-glow)"
          initial={{ pathLength: 0 }}
        />
        
        {/* Main lightning path */}
        <motion.path
          d={lightningPath2}
          stroke="url(#lightning-gradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
        />
      </motion.svg>
      
      {/* Moving shimmer effect */}
      <motion.div 
        className="absolute top-1/2 h-2 w-8 bg-gradient-to-r from-transparent via-white to-transparent rounded-full transform -translate-y-1/2 z-5"
        style={{ 
          left: direction === 'left-to-right' ? '0%' : '100%',
          filter: 'blur(1px) brightness(1.5)',
        }}
        initial={{ 
          opacity: 0,
          left: direction === 'left-to-right' ? '0%' : '100%'
        }}
        animate={shimmerControls}
      />
      
      {/* Particle effect at each end */}
      {isActive && (
        <>
          <motion.div 
            className="absolute w-3 h-3 rounded-full bg-blue-400 z-10"
            style={{ 
              top: '50%',
              left: direction === 'left-to-right' ? '0' : 'auto',
              right: direction === 'right-to-left' ? '0' : 'auto',
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 10px rgba(96, 165, 250, 0.8), 0 0 20px rgba(96, 165, 250, 0.5)'
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute w-3 h-3 rounded-full bg-indigo-400 z-10"
            style={{ 
              top: '50%',
              left: direction === 'right-to-left' ? '0' : 'auto',
              right: direction === 'left-to-right' ? '0' : 'auto',
              transform: 'translate(50%, -50%)',
              boxShadow: '0 0 10px rgba(129, 140, 248, 0.8), 0 0 20px rgba(129, 140, 248, 0.5)'
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
          />
        </>
      )}
    </div>
  );
};

export default ThunderLine;
