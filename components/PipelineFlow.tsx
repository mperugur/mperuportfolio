'use client';

import React from 'react';
import { useEffect } from 'react';

interface PipelineNodeProps {
  title: string;
  description: string;
  icon?: string;
  delay?: number;
}

const PipelineNode: React.FC<PipelineNodeProps> = ({ 
  title, 
  description, 
  icon,
  delay = 0
}) => {
  return (
    <div 
      className="pipeline-node w-full md:w-64 flex flex-col items-center text-center"
      style={{ 
        animation: `fadeIn 0.5s ease-out ${delay}s both`,
      }}
    >
      {icon && (
        <div className="w-16 h-16 mb-4 flex items-center justify-center">
          <img src={`/assets/${icon}`} alt={title} className="w-12 h-12" />
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

interface PipelineFlowProps {
  className?: string;
}

const PipelineFlow: React.FC<PipelineFlowProps> = ({ className = '' }) => {
  useEffect(() => {
    // Add keyframes for animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes flowRight {
        0% { width: 0; }
        100% { width: 100%; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        <PipelineNode 
          title="Raw Data" 
          description="Collection of diverse data sources" 
          icon="raw-data.svg"
          delay={0.1}
        />
        
        <div className="hidden md:block w-24 pipeline-line" style={{ animation: 'flowRight 1s ease-out 0.3s both' }}></div>
        
        <PipelineNode 
          title="Transform" 
          description="ETL processes and data cleansing" 
          icon="transform.svg"
          delay={0.5}
        />
        
        <div className="hidden md:block w-24 pipeline-line" style={{ animation: 'flowRight 1s ease-out 0.7s both' }}></div>
        
        <PipelineNode 
          title="Analyze" 
          description="Insights and pattern discovery" 
          icon="analyze.svg"
          delay={0.9}
        />
        
        <div className="hidden md:block w-24 pipeline-line" style={{ animation: 'flowRight 1s ease-out 1.1s both' }}></div>
        
        <PipelineNode 
          title="Deliver" 
          description="Actionable dashboards and reports" 
          icon="deliver.svg"
          delay={1.3}
        />
      </div>
    </div>
  );
};

export default PipelineFlow;
