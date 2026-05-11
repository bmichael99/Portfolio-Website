import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <div className='grid gap-4 items-center grid-cols-[auto_1fr] py-4 px-2 hover:outline-1 rounded-3xl'>
      {/*Project Photo*/}
      <div>
        <img className='outline-1 w-[125px] h-[125px] rounded-3xl justify-self-center object-cover' src='/experience/adanta_logo.jpg'></img>
        <p className='text-sm text-muted-foreground pt-2 text-center'>Aug 2025 - Present</p>
      </div>
      {/*Project Info*/}
      <div className='w-full h-full rounded-sm flex flex-col gap-2'>
        <div>
        <h2 className='font-bold'>Adanta</h2>
          <p className='font-normal'>Software Engineer | Contracted</p>
        </div>
        <p className='text-sm text-muted-foreground'>Building business workflow automations and tooling using full-stack technologies.</p>
        {/*Links*/}
        {/* <div className='flex gap-2 w-full'>
          <a className='outline-1 py-1 px-2 rounded-lg text-sm hover:bg-accent flex items-center gap-1' href={github_link} target='_blank'><GitBranch height={"14px"} width={"14px"}/> Github</a>
          {demo_link && <a className='outline-1 py-1 px-2 rounded-lg text-sm hover:bg-accent flex items-center gap-1' href={demo_link} target='_blank'><ExternalLink height={"14px"} width={"14px"}/> Live Demo</a>}
        </div> */}
      </div>
    </div>
  )
}

export default ExperienceCard