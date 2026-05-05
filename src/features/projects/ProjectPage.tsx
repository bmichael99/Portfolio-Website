import React from 'react'

type Props = {}

type Project = {
  title: string,
  description: string,
  github_link: string,
  demo_link?: string,
  
}

type Projects = Project[];

const projects : Projects = [
  {
    title: "Finance Analytics Website",
    description: "",
    github_link: "",
    demo_link: "",
  },
  {
    title: "Google Drive Clone",
    description: "",
    github_link: "",
    demo_link: "",
  },
  {
    title: "",
    description: "",
    github_link: "",
    demo_link: "",
  },
  {
    title: "",
    description: "",
    github_link: "",
    demo_link: "",
  },
]

function ProjectPage({}: Props) {
  return (
    <div className='py-4'>ProjectPage</div>
  )
}

export default ProjectPage