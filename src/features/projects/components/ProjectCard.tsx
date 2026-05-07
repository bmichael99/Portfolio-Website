import React from 'react'
import { type Project } from '../ProjectPage'
import { techList, techLabelsColored, type TechList } from '../../../lib/tech'
import { ExternalLink, GitBranch } from 'lucide-react'
import TechBadge from '../../technology/components/TechBadge'
 


function ProjectCard({title, summary, description, github_link, image_url, demo_link, technology_used }: Project) {
  return (
    <div className='py-4 w-full hover:outline-1 rounded-sm p-2 flex flex-col gap-2'>
      <h2 className='font-medium'>{title}</h2>
      <p className='text-muted-foreground'>{description}</p>
      {/*Technology Used*/}
      <div className='flex gap-2 w-full pb-4 flex-wrap'>
        {technology_used?.map((tech) => <TechBadge icon={techLabelsColored[tech].icon} label={techLabelsColored[tech].label}></TechBadge>)}
      </div>
      {/*Links*/}
      <div className='flex gap-2 w-full'>
        <a className='outline-1 py-1 px-2 rounded-lg text-sm hover:bg-accent flex items-center gap-1' href={github_link} target='_blank'><GitBranch height={"14px"} width={"14px"}/> Github</a>
        {demo_link && <a className='outline-1 py-1 px-2 rounded-lg text-sm hover:bg-accent flex items-center gap-1' href={demo_link} target='_blank'><ExternalLink height={"14px"} width={"14px"}/> Live Demo</a>}
      </div>
    </div>
  )
}

export default ProjectCard