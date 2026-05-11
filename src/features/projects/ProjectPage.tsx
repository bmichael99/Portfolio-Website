import ProjectCard from './components/ProjectCard';

type Props = {}

import { type TechList } from '../../lib/tech';

export type Project = {
  title: string,
  summary: string,
  description: string,
  github_link: string,
  demo_link?: string,
  image_url: string,
  technology_used: TechList[],
}

type Projects = Project[];

const projects : Projects = [
  {
    title: "Finance Analytics Website",
    summary: "A finance analytics platform that enables users to upload and extract data from invoices, track upcoming and past-due payments, and analyze spending trends through interactive graphs, tables, and charts.",
    description: "A finance analytics platform that enables users to upload and extract data from invoices, track upcoming and past-due payments, and analyze spending trends through interactive graphs, tables, and charts. Built with a scalable, event-driven architecture to handle high-throughput document processing, with real-time status updates streamed to users as their documents are ingested. Designed to help companies manage large volumes of invoices with greater visibility and efficiency.",
    github_link: "https://github.com/bmichael99/FinanceOps-Platform",
    demo_link: "https://finance.michaelbrandmeyer.com",
    image_url: "/projects/financeops_preview.png",
    technology_used: ['javascript', 'typescript', 'react', 'tailwindcss', 'nodejs', 'express', 'postgresql', 'docker', 'github_actions', 'aws', 'azure'],
  },
  {
    title: "Google Drive Clone",
    summary: "A file-sharing website inspired by Google Drive, allowing users to upload, organize, and share files through managed access links and expiration controls.",
    description: "A file-sharing website inspired by Google Drive, allowing users to upload, organize, and share files through managed access links and expiration controls. Features secure authentication with session management, cloud-based file storage, and a clean, responsive server-rendered UI. Built as an early full-stack project to solidify core web fundamentals.",
    github_link: "https://github.com/bmichael99/File-Uploader-App",
    demo_link: "https://files.michaelbrandmeyer.com/",
    image_url: "/projects/file_dashboard_page.png",
    technology_used: ['javascript', 'html', 'css', 'nodejs', 'express', 'postgresql'],
  },
  {
    title: "Class Scheduling Assistant | Top Class",
    summary: "A web application that streamlines class selection by surfacing professor ratings, reviews, and popular tags directly alongside course schedules.",
    description: "A web application that streamlines class selection by surfacing professor ratings, reviews, and popular tags directly alongside course schedules. Pulls data from RateMyProfessor through a custom-built scraper API, giving students the context they need to make informed decisions without manually researching each professor. Built with a Java Spring Boot backend and React frontend, with a separate Python microservice handling data extraction.",
    github_link: "http://github.com/Josue-B-Navarrete/TopClass",
    image_url: "",
    technology_used: ['react', 'javascript', 'css', 'java', 'python', 'postgresql'],
  },
]
//TODO: Project Cards need to have a fixed size and rules for overflowing content.

function ProjectPage({}: Props) {
  return (
    <div className='w-full'>
      <h2 className='font-bold text-3xl py-4'>Projects</h2>
      <hr></hr>
      <div className='py-2 flex flex-col gap-2'>
        {projects.map((project) => 
          <ProjectCard 
          summary={project.summary}
          description={project.description}
          github_link={project.github_link}
          image_url={project.image_url}
          title={project.title}
          demo_link={project.demo_link}
          technology_used={project.technology_used}
          key={project.title}
          />
        )}
      </div>
    </div>
  )
}

export default ProjectPage