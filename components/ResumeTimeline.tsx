'use client';

import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'experience';
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  organization,
  description,
  type,
  index
}) => {
  const isEven = index % 2 === 0;
  const bgColor = type === 'education' ? 'from-blue-500/20 to-indigo-600/20' : 'from-purple-500/20 to-pink-600/20';
  
  return (
    <div className={`flex flex-col md:flex-row items-center gap-4 mb-8 ${isEven ? '' : 'md:flex-row-reverse'}`}>
      {/* Timeline connector */}
      <div className="hidden md:flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${bgColor} border-2 border-white/50`}></div>
        {index < 5 && <div className="w-1 h-24 bg-white/20"></div>}
      </div>
      
      {/* Content */}
      <div className={`pipeline-node w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:text-right' : 'md:text-left'}`}>
        <div className="text-sm font-mono text-gray-400 mb-1">{year}</div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <div className="text-indigo-400 mb-2">{organization}</div>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

interface ResumeTimelineProps {
  className?: string;
}

const ResumeTimeline: React.FC<ResumeTimelineProps> = ({ className = '' }) => {
  const timelineItems = [
    {
      year: '2019-Present',
      title: 'AWS Data Engineer & BI Developer',
      organization: 'Various Companies',
      description: 'Developing ETL pipelines, Power BI dashboards, and AWS data solutions. Working with S3, Glue, Lambda, Redshift, Step Functions, and more.',
      type: 'experience' as const
    },
    {
      year: '2017-2019',
      title: 'MS in Information Technology',
      organization: 'Towson University',
      description: 'Specialized in data engineering, business intelligence, and cloud computing technologies.',
      type: 'education' as const
    },
    {
      year: '2016-2017',
      title: 'PGDM',
      organization: 'Centennial College, Toronto',
      description: 'Postgraduate diploma focused on business management and data analysis.',
      type: 'education' as const
    },
    {
      year: '2014-2016',
      title: 'Business Analyst',
      organization: 'Financial Services',
      description: 'Analyzed business requirements and translated them into technical specifications for development teams.',
      type: 'experience' as const
    },
    {
      year: '2010-2014',
      title: 'Bachelor in Accounting',
      organization: 'University',
      description: 'Gained strong foundation in financial principles and data analysis.',
      type: 'education' as const
    },
    {
      year: '2009-2010',
      title: 'Accounting Intern',
      organization: 'Financial Firm',
      description: 'Started career with focus on data organization and financial reporting.',
      type: 'experience' as const
    }
  ];

  return (
    <div className={`${className}`}>
      <div className="flex justify-center mb-12">
        <a 
          href="/assets/Mohan_Perugu_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Download Resume
        </a>
      </div>

      <div className="relative">
        {timelineItems.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            organization={item.organization}
            description={item.description}
            type={item.type}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ResumeTimeline;
