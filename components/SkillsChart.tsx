'use client';

import React, { useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface SkillCategory {
  name: string;
  skills: string[];
  percentage: number;
  color: string;
}

interface SkillsChartProps {
  className?: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: 'AWS',
    skills: ['S3', 'Glue', 'Lambda', 'Redshift', 'Step Functions'],
    percentage: 30,
    color: 'rgba(255, 153, 0, 0.8)'
  },
  {
    name: 'BI Tools',
    skills: ['Power BI', 'SSIS', 'SSRS', 'SQL Server'],
    percentage: 25,
    color: 'rgba(79, 70, 229, 0.8)'
  },
  {
    name: 'Programming',
    skills: ['Python', 'SQL', 'TypeScript'],
    percentage: 20,
    color: 'rgba(16, 185, 129, 0.8)'
  },
  {
    name: 'CRM',
    skills: ['MS Dynamics', 'CRM Development', 'Integration'],
    percentage: 15,
    color: 'rgba(245, 158, 11, 0.8)'
  },
  {
    name: 'Other',
    skills: ['Git', 'ETL Pipelines', 'Docker'],
    percentage: 10,
    color: 'rgba(99, 102, 241, 0.8)'
  }
];

const SkillsChart: React.FC<SkillsChartProps> = ({ className = '' }) => {
  const chartRef = useRef(null);

  const data = {
    labels: skillCategories.map(cat => cat.name),
    datasets: [
      {
        data: skillCategories.map(cat => cat.percentage),
        backgroundColor: skillCategories.map(cat => cat.color),
        borderColor: skillCategories.map(cat => cat.color.replace('0.8', '1')),
        borderWidth: 2,
        hoverOffset: 15
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: 'white',
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.formattedValue || '';
            const category = skillCategories.find(cat => cat.name === label);
            
            if (category) {
              return [
                `${label}: ${value}%`,
                `Skills: ${category.skills.join(', ')}`
              ];
            }
            return `${label}: ${value}%`;
          }
        }
      }
    },
  };

  return (
    <div className={`p-6 bg-slate-900/50 rounded-xl border border-indigo-500/20 ${className}`}>
      <h2 className="text-2xl font-bold mb-6 text-center">Skills Distribution</h2>
      <div className="w-full max-w-md mx-auto">
        <Pie ref={chartRef} data={data} options={options} />
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category) => (
          <div key={category.name} className="skill-card p-4">
            <h3 className="text-lg font-semibold" style={{ color: category.color }}>{category.name}</h3>
            <p className="text-sm text-gray-300 mt-2">{category.skills.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsChart;
