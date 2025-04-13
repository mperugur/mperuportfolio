'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PipelineNodeProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  onHover: (index: number, isHovered: boolean) => void;
  className?: string;
}

const PipelineNode: React.FC<PipelineNodeProps> = ({
  title,
  description,
  icon,
  index,
  onHover,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(index, true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover(index, false);
  };
  
  return (
    <motion.div
      className={`pipeline-node relative flex flex-col items-center justify-center text-center p-5 rounded-xl 
                 ${isHovered ? 'bg-slate-800/90' : 'bg-slate-800/70'} 
                 border border-blue-500/30 shadow-lg z-10 ${className}`}
      initial={{ scale: 1 }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)',
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 15 
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-active={isHovered}
    >
      {/* Background glow effect on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-600/10 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
      
      {/* Icon with animated background */}
      <div className="relative w-16 h-16 mb-4 text-blue-400 flex items-center justify-center">
        {/* Icon background pulse */}
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-500/10"
          animate={isHovered ? {
            scale: [0.8, 1.1, 0.9],
            opacity: [0.3, 0.6, 0.3],
          } : {
            scale: 0.8,
            opacity: 0.3,
          }}
          transition={isHovered ? {
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
          } : {}}
        />
        
        {/* The icon itself with subtle movement on hover */}
        <motion.div
          animate={isHovered ? { 
            y: [0, -3, 0], 
            scale: [1, 1.05, 1],
            rotate: [0, -2, 0, 2, 0],
          } : {}}
          transition={isHovered ? { 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse",
          } : {}}
        >
          {icon}
        </motion.div>
        
        {/* Additional glint effect on hover */}
        {isHovered && (
          <motion.div
            className="absolute w-12 h-12 rounded-full"
            style={{ 
              background: 'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%)',
              mixBlendMode: 'overlay'
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.7, 0],
              scale: [0.5, 1.2, 0.8],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
            }}
          />
        )}
      </div>
      
      {/* Title with animated color change */}
      <motion.h3 
        className="text-xl font-bold mb-2 text-white relative"
        animate={isHovered ? { 
          color: '#60A5FA',
          scale: 1.05,
          y: -2,
          textShadow: '0px 0px 8px rgba(96, 165, 250, 0.4)'
        } : {
          color: 'white',
          scale: 1,
          y: 0,
          textShadow: 'none'
        }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>
      
      {/* Description with fade-in effect */}
      <motion.p 
        className="text-gray-300 text-sm max-w-[200px]"
        initial={{ opacity: 0.8 }}
        animate={{ 
          opacity: isHovered ? 1 : 0.8,
          y: isHovered ? 0 : 3
        }}
        transition={{ duration: 0.3 }}
      >
        {description}
      </motion.p>
      
      {/* Border pulse effect on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="absolute inset-0 rounded-xl"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              scale: [1, 1.06, 1.12],
              borderWidth: [1, 2, 3],
              borderColor: ['rgba(96, 165, 250, 0.3)', 'rgba(96, 165, 250, 0.6)', 'rgba(96, 165, 250, 0)'],
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            style={{
              borderStyle: 'solid',
              borderRadius: '0.75rem',
            }}
          />
        )}
      </AnimatePresence>
      
      {/* Small dots in each corner that appear on hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            {/* Top left */}
            <motion.div
              className="absolute w-1.5 h-1.5 rounded-full bg-blue-400"
              style={{ top: 5, left: 5 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
            />
            {/* Top right */}
            <motion.div
              className="absolute w-1.5 h-1.5 rounded-full bg-blue-400"
              style={{ top: 5, right: 5 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            />
            {/* Bottom left */}
            <motion.div
              className="absolute w-1.5 h-1.5 rounded-full bg-blue-400"
              style={{ bottom: 5, left: 5 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            />
            {/* Bottom right */}
            <motion.div
              className="absolute w-1.5 h-1.5 rounded-full bg-blue-400"
              style={{ bottom: 5, right: 5 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PipelineNode;
