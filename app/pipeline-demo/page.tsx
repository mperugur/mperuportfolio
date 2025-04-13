'use client';

import React, { useState } from 'react';
import PipelineContainer from '../../components/PipelineContainer';
import { motion } from 'framer-motion';

export default function PipelineDemoPage() {
  // State for sound toggle
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  // Define the stages of our data pipeline
  const pipelineStages = [
    {
      title: 'Raw Data',
      description: 'Ingest data from diverse sources into our data lake',
      icon: null, // Will use default icon
    },
    {
      title: 'Transform',
      description: 'Clean, filter, and normalize data for analysis',
      icon: null,
    },
    {
      title: 'Analyze',
      description: 'Apply algorithms and statistical methods to extract insights',
      icon: null,
    },
    {
      title: 'Output',
      description: 'Deliver actionable dashboards and reports',
      icon: null,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-12 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Interactive Data Pipeline
        </motion.h1>
        <motion.p 
          className="mt-4 text-gray-300 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hover over each stage to see the dynamic pipeline with lightning animation effects
        </motion.p>
        
        {/* Sound toggle button */}
        <motion.div
          className="mt-4 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border ${
              soundEnabled 
                ? 'border-blue-500 text-blue-400' 
                : 'border-gray-600 text-gray-400'
            } transition-colors focus:outline-none`}
            onClick={() => setSoundEnabled(!soundEnabled)}
          >
            {soundEnabled ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                </svg>
                Sound On
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Sound Off
              </>
            )}
          </button>
        </motion.div>
      </header>
      
      <main className="flex-1 px-4 max-w-7xl mx-auto w-full">
        <motion.div
          className="bg-slate-900/40 rounded-xl p-8 border border-blue-500/20 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <PipelineContainer 
            stages={pipelineStages} 
            className="my-10"
            enableSounds={soundEnabled}
          />
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-slate-900/40 rounded-lg border border-blue-500/20 p-6">
            <h2 className="text-xl font-bold text-white mb-4">How It Works</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <p>Each node represents a stage in the data pipeline process</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <p>Hover over a node to see it expand with a pulse effect</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <p>Lightning animation shows data flowing between stages</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <p>Each stage has a unique icon representing its function</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-900/40 rounded-lg border border-blue-500/20 p-6">
            <h2 className="text-xl font-bold text-white mb-4">Technical Details</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <p>Built with <span className="text-blue-400">Framer Motion</span> for smooth animations</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <p>SVG animations for the lightning effect</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <p>Responsive design adapts to mobile and desktop</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <p>Optional sound effects enhance the interactive experience</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </main>
      
      <footer className="mt-20 py-6 text-center text-gray-400 text-sm">
        <p>Created with Next.js, Framer Motion, and Tailwind CSS</p>
      </footer>
    </div>
  );
}
