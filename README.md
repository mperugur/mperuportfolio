# Mohan Perugu - Data Engineer Portfolio

A statically generated portfolio website for Mohan Perugu, a Data Engineer and Business Intelligence Developer. The website is themed around a data pipeline and Power BI dashboard, showcasing Mohan's skills, experience, and projects.

## Features

- Interactive data pipeline visualization
- Skills distribution chart using Chart.js
- Project cards styled like pipeline jobs
- Resume timeline visualized as an ETL flow
- Contact section with social links

## Technologies Used

- Next.js 15
- TypeScript
- Tailwind CSS
- Chart.js / Recharts for data visualization

## Getting Started

### Prerequisites

- Node.js 18.0 or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/username/mohan-portfolio.git
cd mohan-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/app`: Next.js app directory with page templates and layouts
- `/components`: Reusable UI components
  - `PipelineFlow.tsx`: Data pipeline visualization
  - `SkillsChart.tsx`: Interactive skills chart
  - `ProjectCard.tsx`: Project card component
  - `ResumeTimeline.tsx`: Career timeline component
- `/public/assets`: Images, icons, and static files

## Building for Production

To build the portfolio for production:

```bash
npm run build
```

This will generate a `.next` folder with optimized production build.

To preview the production build:

```bash
npm run start
```

## Deployment

The portfolio is set up for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy with a single click

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Designed with a focus on data pipeline and dashboard aesthetics
- Icons and graphics inspired by modern data visualization tools
