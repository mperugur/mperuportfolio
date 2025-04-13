
import PipelineFlow from "../components/PipelineFlow";
import SkillsChart from "../components/SkillsChart";
import ProjectCard from "../components/ProjectCard";
import ResumeTimeline from "../components/ResumeTimeline";

export default function Home() {
  const projects = [
    {
      title: "Real-time Streaming Pipeline",
      description: "Designed and implemented a real-time data streaming pipeline using AWS Kinesis, Lambda, and DynamoDB to process and analyze customer interaction data.",
      technologies: [
        { name: "AWS Lambda", icon: "aws-lambda.svg" },
        { name: "Kinesis", icon: "aws-kinesis.svg" },
        { name: "DynamoDB", icon: "aws-dynamodb.svg" },
        { name: "Python", icon: "python.svg" }
      ],
      status: "completed",
      image: "project-streaming.jpg"
    },
    {
      title: "Redshift ETL Framework",
      description: "Built a scalable ETL framework for data warehousing using AWS Glue, S3, and Redshift, improving data load times by 40% and reducing costs.",
      technologies: [
        { name: "AWS Glue", icon: "aws-glue.svg" },
        { name: "Redshift", icon: "aws-redshift.svg" },
        { name: "S3", icon: "aws-s3.svg" },
        { name: "SQL", icon: "sql.svg" }
      ],
      status: "completed",
      image: "project-redshift.jpg"
    },
    {
      title: "Power BI Sales Dashboard",
      description: "Created an interactive Power BI dashboard for sales analysis with drill-down capabilities, helping the sales team identify key trends and opportunities.",
      technologies: [
        { name: "Power BI", icon: "power-bi.svg" },
        { name: "SQL Server", icon: "sql-server.svg" },
        { name: "DAX", icon: "dax.svg" }
      ],
      status: "in-progress",
      image: "project-powerbi.jpg"
    },
    {
      title: "CRM Integration Pipeline",
      description: "Developed an integration solution connecting MS Dynamics CRM with enterprise data warehouse, automating customer data synchronization and reporting.",
      technologies: [
        { name: "MS Dynamics", icon: "dynamics.svg" },
        { name: "Azure Functions", icon: "azure-functions.svg" },
        { name: "SSIS", icon: "ssis.svg" }
      ],
      status: "planned",
      image: "project-crm.jpg"
    }
  ];
  return (
    <main className="py-8 px-4 md:px-8">
      {/* Hero Section */}
      <section className="py-16 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Mohan Perugu
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
          Data Engineer & Business Intelligence Developer
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-12 text-gray-200">
          Turning Raw Data into Actionable Insights
        </p>
        
        <PipelineFlow className="mt-8" />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="pipeline-node">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div>
                <div>
                  <p className="font-semibold">Masters in Information Technology</p>
                  <p className="text-sm text-gray-300">Towson University</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div>
                <div>
                  <p className="font-semibold">PGDM</p>
                  <p className="text-sm text-gray-300">Centennial College, Toronto</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></div>
                <div>
                  <p className="font-semibold">Bachelors in Accounting</p>
                  <p className="text-sm text-gray-300">OSmania University</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="pipeline-node">
            <h3 className="text-xl font-bold mb-4">Professional Journey</h3>
            <div className="relative pl-6 border-l-2 border-indigo-500/50 space-y-6">
              <div>
                <p className="font-semibold">SSIS / SSRS / Power BI Developer</p>
                <p className="text-sm text-gray-300">Building ETL processes and interactive dashboards</p>
              </div>
              <div>
                <p className="font-semibold">AWS Data Engineer</p>
                <p className="text-sm text-gray-300">S3, Glue, Lambda, Redshift, Step Functions</p>
              </div>
              <div>
                <p className="font-semibold">MS Dynamics CRM Developer</p>
                <p className="text-sm text-gray-300">CRM customization and data integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Specialized in data engineering, ETL pipelines, and business intelligence tools
          </p>
        </div>

        <SkillsChart className="mt-8" />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Data pipeline jobs I have designed and implemented
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              status={project.status as 'completed' | 'in-progress' | 'planned'}
              image={project.image}
            />
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Resume</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            My career path visualized as an ETL job sequence
          </p>
        </div>

        <ResumeTimeline className="mt-12" />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Contact</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </div>

        <div className="pipeline-node max-w-xl mx-auto">
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="mailto:info@example.com" className="text-white hover:text-indigo-400 transition-colors">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          
          <div className="text-center text-gray-300">
            <p>Feel free to contact me for potential collaborations,</p>
            <p>project inquiries, or just to connect!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Mohan Perugu. All rights reserved.</p>
        <p className="mt-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
      </footer>
    </main>
  );
}
