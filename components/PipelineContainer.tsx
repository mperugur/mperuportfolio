'use client';

import React, { useState, useCallback, useEffect } from 'react';
import PipelineNode from './PipelineNode';
import ThunderLine from './ThunderLine';
import { useSound } from './Sound';

interface PipelineStage {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface PipelineContainerProps {
  stages: PipelineStage[];
  className?: string;
  enableSounds?: boolean;
}

const PipelineContainer: React.FC<PipelineContainerProps> = ({
  stages,
  className = '',
  enableSounds = true,
}) => {
  // Track which connection lines should be activated
  const [activeLines, setActiveLines] = useState<boolean[]>(Array(stages.length - 1).fill(false));
  const [soundEnabled, setSoundEnabled] = useState(false);
  
  // Sound effects using the useSound hook
  const playHoverSound = useSound('/sounds/hover.mp3', { volume: 0.3 });
  const playElectricSound = useSound('/sounds/electric.mp3', { volume: 0.2 });
  
  // Enable sounds after first user interaction
  useEffect(() => {
    const enableSoundOnInteraction = () => {
      setSoundEnabled(true);
      document.removeEventListener('click', enableSoundOnInteraction);
    };
    
    document.addEventListener('click', enableSoundOnInteraction);
    
    return () => {
      document.removeEventListener('click', enableSoundOnInteraction);
    };
  }, []);
  
  // Handle hover events from pipeline nodes
  const handleNodeHover = useCallback((index: number, isHovered: boolean) => {
    if (index < stages.length - 1) {
      setActiveLines(prev => {
        const newLines = [...prev];
        newLines[index] = isHovered;
        return newLines;
      });
      
      // Play sounds if enabled
      if (isHovered && soundEnabled && enableSounds) {
        playHoverSound();
        setTimeout(() => {
          playElectricSound();
        }, 150);
      }
    }
  }, [stages.length, playHoverSound, playElectricSound, soundEnabled, enableSounds]);
  
  // Database icon for Raw Data
  const DatabaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  );
  
  // Gear icon for Transform
  const GearIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  );
  
  // Chart icon for Analyze
  const ChartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
      <line x1="2" y1="20" x2="22" y2="20"></line>
    </svg>
  );
  
  // Dashboard icon for Output
  const DashboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  );
  
  // Default icons based on stage position
  const defaultIcons = [
    <DatabaseIcon key="database" />,
    <GearIcon key="gear" />,
    <ChartIcon key="chart" />,
    <DashboardIcon key="dashboard" />
  ];
  
  return (
    <div className={`w-full ${className}`}>
      {/* Sound info message */}
      {enableSounds && !soundEnabled && (
        <div className="text-xs text-center text-blue-300/70 mb-2 animate-pulse">
          Click anywhere to enable sound effects
        </div>
      )}
      
      <div className="py-10 flex flex-col md:flex-row items-center justify-around">
        {stages.map((stage, index) => (
          <React.Fragment key={index}>
            <PipelineNode
              title={stage.title}
              description={stage.description}
              icon={stage.icon || defaultIcons[index % defaultIcons.length]}
              index={index}
              onHover={handleNodeHover}
              className="mb-6 md:mb-0 relative z-10"
            />
            
            {/* Thunder line between nodes (except after the last node) */}
            {index < stages.length - 1 && (
              <div className="flex-1 w-full md:w-auto md:h-auto max-w-[150px] z-0">
                <ThunderLine 
                  isActive={activeLines[index]} 
                  className="w-full"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PipelineContainer;
